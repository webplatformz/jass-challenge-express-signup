import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {authenticateGithub, authenticateBitbucket, logout, checkAuth} from '../actions';

class UserContainer extends Component {


    componentWillMount() {
        this.props.onCheckAuth();
    }

    render() {

        const authStatus = this.props.isAuthenticated ? 'logged in' : 'not logged in';
        const email = this.props.user.username ? this.props.user.username : 'not defined';
        const school = this.props.user.provider ? this.props.user.provider : 'not defined';

        return (
            <div>
                <h3>props should be displayed here</h3>
                <h3>{authStatus}</h3>
                <h3>{email}</h3>
                <h3>{school}</h3>
                <button onClick={() => this.props.onAuthenticateGithubClick()}>Login with Github</button>
                <button onClick={() => this.props.onAuthenticateBitbucketClick()}>Login with Bitbucket</button>
                <button onClick={() => this.props.onLogoutClick()}>Logout</button>
            </div>
        );
    }
}
;

UserContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
    onCheckAuth: PropTypes.func,
    onAuthenticateGithubClick: PropTypes.func,
    onAuthenticateBitbucketClick: PropTypes.func,
    onLogoutClick: PropTypes.func
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.userReducer.isAuthenticated,
    user: state.userReducer.user
});

export default connect(
    mapStateToProps,
    {
        onAuthenticateGithubClick: authenticateGithub,
        onAuthenticateBitbucketClick: authenticateBitbucket,
        onLogoutClick: logout,
        onCheckAuth: checkAuth
    }
)(UserContainer);
