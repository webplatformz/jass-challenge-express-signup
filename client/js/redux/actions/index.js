export const LOGIN = 'LOGIN';
export const AUTHENTICATE_GITHUB = 'AUTHENTICATE_GITHUB';
export const AUTHENTICATE_BITBUCKET = 'AUTHENTICATE_BITBUCKET';
export const LOGOUT = 'LOGOUT';

export const login = (isAuthenticated, user) => {
  return {
    type: LOGIN,
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
