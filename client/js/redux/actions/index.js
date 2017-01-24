import fetch from 'isomorphic-fetch';

export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTHENTICATE_GITHUB = 'AUTHENTICATE_GITHUB';
export const AUTHENTICATE_BITBUCKET = 'AUTHENTICATE_BITBUCKET';
export const LOGOUT = 'LOGOUT';

export const checkAuth = () => {
  return dispatch => {
    return fetch(`http://127.0.0.1:55555/auth/user`, {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => {
        return dispatch(loginSuccess(json.isAuthenticated, json.user));
      });
  };
};

export const loginSuccess = (isAuthenticated, user) => {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated,
    user
  };
};

export const authenticateGithub = () => {
  return {
    type: AUTHENTICATE_GITHUB
  };
};

export const authenticateBitbucket = () => {
  return {
    type: AUTHENTICATE_BITBUCKET
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
