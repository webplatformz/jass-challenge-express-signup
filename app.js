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
const https = require('https');

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
const findCreateProfile = (username, email, avatarUrl, payload, done) => {
    // find or create user profile
    RedisClient.hgetall(username, (err, stored) => {
        if (err) {
            throw err;
        }

        // new profile if none found
        if (!stored) {
            const creatable = {
                username,
                email,
                avatarUrl,
                gender: '',
                matrikel: '',
                school: '',
                degreeProgram: '',
                degree: '',
                fullname: '',
                repo: '',
                academicyear: '',
                provider: payload.provider,
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
        callbackURL: config.get('githubCallbackUrl'),
        scope: ['user:email']
    },
    (accesstoken, refreshtoken, githubProfile, done) => {
        const username = githubProfile.username;
        const email = githubProfile.emails[0].value;
        const avatarUrl = githubProfile._json.avatar_url;
        findCreateProfile(username, email, avatarUrl, githubProfile, done);
    }
));

/**
 * configure passport to use bitbucket strategy
 */
passport.use(new BitbucketStrategy({
        clientID: BITBUCKET_KEY,
        clientSecret: BITBUCKET_SECRET,
        callbackURL: config.get('bitbucketCallbackUrl'),
        scope: ['email']
    },
    (token, tokenSecret, bitbucketProfile, done) => {
        https.request({
            host: 'api.bitbucket.org',
            path: '/2.0/user/emails',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        }, (response) => {
            let responseText = '';

            response.on('data', data => responseText += data);

            response.on('end', () => {
                const username = bitbucketProfile.username;
                const email = JSON.parse(responseText).values[0].email;
                const avatarUrl = bitbucketProfile._json.links.avatar.href;
                findCreateProfile(username, email, avatarUrl, bitbucketProfile, done);
            });
        }).end();
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
    res.json({ isAuthenticated: isAuthenticated, user: user });
});

/**
 * authenticate with github
 */
app.get('/api/auth/github', passport.authenticate('github'));

/**
 * authenticate with bitbucket
 */
app.get('/api/auth/bitbucket', passport.authenticate('bitbucket'));

/**
 * callback from auth with github
 */
app.get('/api/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});

/**
 * callback from auth with bitbucket
 */
app.get('/api/auth/bitbucket/callback', passport.authenticate('bitbucket', { failureRedirect: '/' }), (req, res) => {
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
    res.sendFile('index.html', { root: __dirname + '/build/client' });
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
    const { email, matrikel, school, degreeProgram, degree, gender, fullname, repo, academicyear } = req.body;

    RedisClient.hmset(username, 'email', email, 'matrikel', matrikel, 'school', school, 'degreeProgram', degreeProgram, 'degree', degree, 'gender', gender, 'fullname', fullname, 'repo', repo, 'academicyear', academicyear, (err, reply) => {
        if (err) {
            res.status(500).send('error updating profile');
        } else {
            res.status(204);
        }
        res.send(reply);
    });
});

var port = process.env.PORT || config.get('port');
app.listen(port);
console.info(`application listening on port ${port}`);
