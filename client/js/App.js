import React, { Component, PropTypes } from 'react';
import AppRouter from './routing/AppRouter';
import { connect } from 'react-redux';
import { authenticateGithub, authenticateBitbucket, logout, checkAuth } from './redux/actions';

class App extends Component {

    componentWillMount() {
        this.props.onCheckAuth();
    }

    render() {
        return (
            <AppRouter isAuthenticated={this.props.isAuthenticated} />
        );
    }
}

App.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
    onCheckAuth: PropTypes.func,
    onAuthenticateGithubClick: PropTypes.func,
    onAuthenticateBitbucketClick: PropTypes.func,
    onLogoutClick: PropTypes.func
};

export default connect(
    state => ({
        isAuthenticated: state.user.isAuthenticated,
        user: state.user.user
    }),
    {
        onAuthenticateGithubClick: authenticateGithub,
        onAuthenticateBitbucketClick: authenticateBitbucket,
        onLogoutClick: logout,
        onCheckAuth: checkAuth
    }
)(App);

