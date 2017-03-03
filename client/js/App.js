import React, { Component, PropTypes } from 'react';
import AppRouter from './routing/AppRouter';
import { connect } from 'react-redux';
import { authenticateGithub, authenticateBitbucket, logout, checkAuth } from './redux/actions';

class App extends Component {

    componentWillMount() {
        this.props.onCheckAuth();
    }

    render() {
        if (this.props.authenticationChecked) {
            return (
                <AppRouter isAuthenticated={this.props.isAuthenticated} />
            );
        }

        return <div />; // TODO should we display something to guide users if auth checking fails?
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
    state => state.user,
    {
        onAuthenticateGithubClick: authenticateGithub,
        onAuthenticateBitbucketClick: authenticateBitbucket,
        onLogoutClick: logout,
        onCheckAuth: checkAuth
    }
)(App);

