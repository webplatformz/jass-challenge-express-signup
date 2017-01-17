import fetch from 'isomorphic-fetch';

export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTHENTICATE_GITHUB = 'AUTHENTICATE_GITHUB';
export const AUTHENTICATE_BITBUCKET = 'AUTHENTICATE_BITBUCKET';
export const LOGOUT = 'LOGOUT';

export const checkAuth = () => {
  return dispatch => {
    return fetch(`http://localhost:55555/auth/user`, {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);

        let isAuthenticated = false;
        let user = {};
        if (user.username) {
          isAuthenticated = true;
          user = json;
        }
        return dispatch(loginSuccess(isAuthenticated, user));
      });
  };
};

export const loginSuccess = (isAuthenticated, user) => {
  console.log(isAuthenticated);
  console.log(user);
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
