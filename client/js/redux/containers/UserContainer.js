import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { tryLogin } from '../actions';

const UserContainer = ({ isAuthenticated, user: { email, school }, tryLogin}) => {
  return (
    <div>
      <h3>props should be displayed here</h3>
      <h3>{isAuthenticated}</h3>
      <h3>{email}</h3>
      <h3>{school}</h3>
      <button onClick={() => tryLogin()}>login here</button>
    </div>
  );
};

UserContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  tryLogin: PropTypes.func
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { tryLogin }
)(UserContainer);
