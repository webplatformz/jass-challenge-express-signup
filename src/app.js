import morgan from 'morgan';
import config from 'config';
import express from 'express';
import redis from 'redis';
import bodyParser from 'body-parser';
import compression from 'compression';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as BitbucketStrategy } from 'passport-bitbucket-oauth2';

const GITHUB_KEY = config.get('githubKey');
const GITHUB_SECRET = config.get('githubSecret');
const BITBUCKET_KEY = config.get('bitbucketKey');
const BITBUCKET_SECRET = config.get('bitbucketSecret');

// setup redis client
const redisClient = redis.createClient({host: config.get('redisHost'), port: config.get('redisPort')});
redisClient.on('start', () => {
  console.log('redis up');
});

// support persistent login sessions
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const findCreateProfile = (username, provider, payload, done) => {

  // find or create user profile
  redisClient.hgetall(username, (err, stored) => {
    if (err) { throw err; }

    // new profile if none found
    if (!stored) {
      const creatable = {
        username: username,
        email: '',
        matrikel: '',
        school: '',
        provider: provider,
        profile: payload
      };

      redisClient.hmset(username, creatable, (err /*, status */) => {
        if (err) { throw err; }
        return done(null, creatable);
      });
    } else {
      return done(null, stored);
    }
  });
};

// github oauth2 with passport
passport.use(new GithubStrategy({
    clientID: GITHUB_KEY,
    clientSecret: GITHUB_SECRET,
    callbackURL: `http://${config.get('host')}:${config.get('port')}/auth/github/callback`
  },
  (accesstoken, refreshtoken, githubProfile, done) => {
    const provider = 'github';
    const username = githubProfile.username;
    findCreateProfile(username, provider, githubProfile, done);
  }
));

// bitbucket oauth2 with passport
passport.use(new BitbucketStrategy({
    clientID: BITBUCKET_KEY,
    clientSecret: BITBUCKET_SECRET,
    callbackURL: `http://${config.get('host')}:${config.get('port')}/auth/bitbucket/callback`
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
app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());

app.get('/', (req, res) => {
  res.send('welcome');
});

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }), ( /*req, res */ ) => { /* redirects to github */ });

app.get('/auth/bitbucket', passport.authenticate('bitbucket'), ( /*req, res */ ) => { /* redirects to bitbucket */ });

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/error' }), (req, res) => {
  res.send({ user: req.user });
});

app.get('/auth/bitbucket/callback', passport.authenticate('bitbucket', { failureRedirect: '/error' }), (req, res) => {
  res.send({ user: req.user });
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// TODO: move to separate file / module
// method to enforce authentication on route
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/error');
};

// used to update user's profile (matrikel, email, etc.)
app.patch('/users', ensureAuthenticated, (req, res) => {

  // profile to update is determined on user making request
  const username = req.user.username;
  const { email: email, matrikel: matrikel, school: school } = req.body;

  redisClient.hmset(username, 'email', email, 'matrikel', matrikel, 'school', school, (err, reply) => {
    if (err) {
      res.status(500).send('error updating profile');
    } else {
      res.status(201);
    }
    res.send(reply);
  });
});

app.listen(config.get('port'));
console.log(`application listening on port ${config.get('port')}`);
