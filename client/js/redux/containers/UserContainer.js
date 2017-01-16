import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const UserContainer = ({ isAuthenticated, user: { email, school }}) => {

  const loginGithub = () => {
    history.pushState({}, "github auth", "http://127.0.0.1:55555/auth/github");
    window.location = "http://127.0.0.1:55555/auth/github";
  };

  const loginBitbucket = () => {
    history.pushState({}, "bitbucket auth", "http://127.0.0.1:55555/auth/bitbucket");
    window.location = "http://127.0.0.1:55555/auth/bitbucket";
  };

  const logout = () => {
    history.pushState({}, "logout", "http://127.0.0.1:55555/auth/logout");
    window.location = "http://127.0.0.1:55555/auth/logout";
  };

  const authStatus = isAuthenticated ? 'logged in' : 'not logged in';

  return (
    <div>
      <h3>props should be displayed here</h3>
      <h3>{authStatus}</h3>
      <h3>{email}</h3>
      <h3>{school}</h3>
      <button onClick={() => loginGithub()}>Login with Github</button>
      <button onClick={() => loginBitbucket()}>Login with Bitbucket</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

UserContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps
)(UserContainer);
