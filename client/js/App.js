import React, { Component, PropTypes } from 'react';
import AppRouter from './routing/AppRouter';
import UserContainer from './redux/containers/UserContainer';
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { onAuthenticateGithubClick: authenticateGithub, onAuthenticateBitbucketClick: authenticateBitbucket, onLogoutClick: logout, onCheckAuth: checkAuth }
)(App);

