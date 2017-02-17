const morgan = require('morgan');
const config = require('config');
const express = require('express');
const RedisClient = require('./server/redisClient');
const bodyParser = require('body-parser');
const compression = require('compression');
const passport = require('passport');
const expressSession = require('express-session');
const GithubStrategy = require('passport-github2').Strategy;
const BitbucketStrategy = require('passport-bitbucket-oauth2').Strategy;

const GITHUB_KEY = config.get('githubKey');
const GITHUB_SECRET = config.get('githubSecret');
const BITBUCKET_KEY = config.get('bitbucketKey');
const BITBUCKET_SECRET = config.get('bitbucketSecret');

// configure redis store for persistent session storage
const RedisStore = require('connect-redis')(expressSession);

// support persistent login sessions
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    RedisClient.hgetall(obj.username, (err, stored) => {
        const parsed = Object.assign({}, stored, {
            profile: JSON.parse(stored.profile)
        });
        done(null, parsed);
    });
});

/**
 * finds user profile based on result from authentication
 * @param username: used as key in redis
 * @param provider: who performed authentication (i.e. github or bitbucket)
 * @param payload: result from authentication
 * @param done: callback
 */
const findCreateProfile = (username, provider, payload, done) => {
    // find or create user profile
    RedisClient.hgetall(username, (err, stored) => {
        if (err) {
            throw err;
        }

        // new profile if none found
        if (!stored) {
            const creatable = {
                username: username,
                email: '',
                gender: '',
                matrikel: '',
                school: '',
                degreeProgram: '',
                degree: '',
                fullname: '',
                repo: '',
                provider: provider,
                profile: payload._raw
            };

            RedisClient.hmset(username, creatable, (err /*, status */) => {
                if (err) {
                    throw err;
                }
                return done(null, creatable);
            });
        } else {
            return done(null, stored);
        }
    });
};

/**
 * configure passport to use github strategy
 */
passport.use(new GithubStrategy({
        clientID: GITHUB_KEY,
        clientSecret: GITHUB_SECRET,
        callbackURL: `http://${config.get('host')}:${config.get('proxy')}/api/auth/github/callback`
    },
    (accesstoken, refreshtoken, githubProfile, done) => {
        const provider = 'github';
        const username = githubProfile.username;
        findCreateProfile(username, provider, githubProfile, done);
    }
));

/**
 * configure passport to use bitbucket strategy
 */
passport.use(new BitbucketStrategy({
        clientID: BITBUCKET_KEY,
        clientSecret: BITBUCKET_SECRET,
        callbackURL: `http://${config.get('host')}:${config.get('proxy')}/api/auth/bitbucket/callback`
    },
    (token, tokenSecret, bitbucketProfile, done) => {
        const provider = 'bitbucket';
        const username = bitbucketProfile.username;
        findCreateProfile(username, provider, bitbucketProfile, done);
    }
));

// setup express app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(expressSession({
    store: new RedisStore({
        client: RedisClient
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());

// client dir as static resources
app.use(express.static(__dirname + '/build/client'));

/**
 * get user info of logged in user
 */
app.get('/api/auth/user', (req, res) => {
    const user = req.user || {};
    const isAuthenticated = req.isAuthenticated();
    res.json({isAuthenticated: isAuthenticated, user: user});
});

/**
 * authenticate with github
 */
app.get('/api/auth/github', passport.authenticate('github', {scope: ['user:email']}), (/*req, res */) => { /* redirects to github */
});

/**
 * authenticate with bitbucket
 */
app.get('/api/auth/bitbucket', passport.authenticate('bitbucket'), (/*req, res */) => { /* redirects to bitbucket */
});

/**
 * callback from auth with github
 */
app.get('/api/auth/github/callback', passport.authenticate('github', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/profile');
});

/**
 * callback from auth with bitbucket
 */
app.get('/api/auth/bitbucket/callback', passport.authenticate('bitbucket', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/profile');
});

/**
 * logout
 */
app.get('/api/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

/**
 * serve react app
 */
app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/build/client'});
});

/**
 * enforces that user is authenticated
 */
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/error');
};

/**
 * update user profile
 */
app.patch('/api/users', ensureAuthenticated, (req, res) => {

    // profile to update is determined on user making request
    const username = req.user.username;
    const {email, matrikel, school, degreeProgram, degree, gender, fullname, repo} = req.body;

    RedisClient.hmset(username, 'email', email, 'matrikel', matrikel, 'school', school, 'degreeProgram', degreeProgram, 'degree', degree, 'gender', gender, 'fullname', fullname, 'repo', repo, (err, reply) => {
        if (err) {
            res.status(500).send('error updating profile');
        } else {
            res.status(204);
        }
        res.send(reply);
    });
});

app.listen(config.get('port'));
console.log(`application listening on port ${config.get('port')}`);
