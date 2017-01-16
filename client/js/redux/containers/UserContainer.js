import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { authenticateGithub, authenticateBitbucket, logout } from '../actions';

const UserContainer = ({ isAuthenticated, user: { email, school }, onAuthenticateGithubClick, onAuthenticateBitbucketClick, onLogoutClick }) => {

  const authStatus = isAuthenticated ? 'logged in' : 'not logged in';

  return (
    <div>
      <h3>props should be displayed here</h3>
      <h3>{authStatus}</h3>
      <h3>{email}</h3>
      <h3>{school}</h3>
      <button onClick={() => onAuthenticateGithubClick()}>Login with Github</button>
      <button onClick={() => onAuthenticateBitbucketClick()}>Login with Bitbucket</button>
      <button onClick={() => onLogoutClick()}>Logout</button>
    </div>
  );
};

UserContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  onAuthenticateGithubClick: PropTypes.func,
  onAuthenticateBitbucketClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { onAuthenticateGithubClick: authenticateGithub, onAuthenticateBitbucketClick: authenticateBitbucket, onLogoutClick: logout}
)(UserContainer);
