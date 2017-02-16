import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from '../layout/Layout';
import LandingPage from '../landing/LandingPage';
import LandingLayout from '../landing/LandingLayout';
import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';
import ReposPage from '../repo/ReposPage';
import ProfilePage from '../profile/ProfilePage';

const AppRouter = ({ isAuthenticated }) => {

  const requireAuth = (nextState, replace) => {
    if (!isAuthenticated) {
      replace({ pathname: '/login' });
    }
  };

  return (
    <Router history={browserHistory}>
      <Route component={LandingLayout}>
        <Route path="/" component={LandingPage} />
      </Route>
      <Route component={Layout}>
        <Route path="login" component={LoginPage}></Route>
        <Route path="signup" component={SignupPage}></Route>
        <Route path="repos" component={ReposPage} /*onEnter={requireAuth}*/></Route>
        <Route path="profile" component={ProfilePage} /*onEnter={requireAuth}*/></Route>
      </Route>
    </Router>
  );
};

export default AppRouter;