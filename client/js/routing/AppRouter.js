import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Layout from '../layout/Layout';
import LandingPage from '../landing/LandingPage';
import LandingLayout from '../landing/LandingLayout';
import ProfilePage from '../profile/ProfilePage';

const AppRouter = ({isAuthenticated}) => {

    const requireAuth = (nextState, replace) => {
        if (!isAuthenticated) {
            replace({pathname: '/'});
        }
    };

    return (
        <Router history={browserHistory}>
            <Route component={LandingLayout}>
                <Route path="/" component={LandingPage}/>
            </Route>
            <Route component={Layout}>
                <Route path="profile" component={ProfilePage} /*onEnter={requireAuth}*/></Route>
            </Route>
        </Router>
    );
};

export default AppRouter;
