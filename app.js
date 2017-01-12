import morgan from 'morgan';
import config from 'config';
import express from 'express';
import RedisClient from './server/redisClient';
import bodyParser from 'body-parser';
import compression from 'compression';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as BitbucketStrategy } from 'passport-bitbucket-oauth2';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './client/js/redux/reducers';
import App from './client/js/App';
import { renderToString } from 'react-dom/server';


const GITHUB_KEY = config.get('githubKey');
const GITHUB_SECRET = config.get('githubSecret');
const BITBUCKET_KEY = config.get('bitbucketKey');
const BITBUCKET_SECRET = config.get('bitbucketSecret');

// support persistent login sessions
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
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
    if (err) { throw err; }

    // new profile if none found
    if (!stored) {
      const creatable = {
        username: username,
        email: '',
        matrikel: '',
        school: '',
        provider: provider,
        profile: payload._json
      };

      RedisClient.hmset(username, creatable, (err /*, status */) => {
        if (err) { throw err; }
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
    callbackURL: `http://${config.get('host')}:${config.get('port')}/auth/github/callback`
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

// CORS
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// client dir as static resources
app.use('/static', express.static(__dirname + '/build/client'));

/**
 * get user info of logged in user
 */
app.get('/auth/user', (req, res) => {
  res.json({ user: req.user });
});

/**
 * authenticate with github
 */
app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }), ( /*req, res */ ) => { /* redirects to github */ });

/**
 * authenticate with bitbucket
 */
app.get('/auth/bitbucket', passport.authenticate('bitbucket'), ( /*req, res */ ) => { /* redirects to bitbucket */ });

/**
 * callback from auth with github
 */
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.send({ user: req.user });
});

/**
 * callback from auth with bitbucket
 */
app.get('/auth/bitbucket/callback', passport.authenticate('bitbucket', { failureRedirect: '/login' }), (req, res) => {
  res.send({ user: req.user });
});

/**
 * logout
 */
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

/**
 * serve react app
 */
app.get('/*', (req, res) => {

  // redux store instance
  const store = createStore(reducer);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // initial state from store
  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
});

const renderFullPage = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <head>
      <meta charset="utf-8"/>
      <title>Jass Challenge Registration</title>
      <link rel="stylesheet" href="static/styles/main.css">
    </head>
    <body>
    <main>${html}</main>
    <script>
      // WARNING: See the following for Security isues with this approach:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
    </script>
    <script src="static/client.js"></script>
    </body>
  `;
};

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
app.patch('/users', ensureAuthenticated, (req, res) => {

  // profile to update is determined on user making request
  const username = req.user.username;
  const { email: email, matrikel: matrikel, school: school } = req.body;

  RedisClient.hmset(username, 'email', email, 'matrikel', matrikel, 'school', school, (err, reply) => {
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
