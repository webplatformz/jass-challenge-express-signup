import fetch from 'isomorphic-fetch';

export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTHENTICATE_GITHUB = 'AUTHENTICATE_GITHUB';
export const AUTHENTICATE_BITBUCKET = 'AUTHENTICATE_BITBUCKET';
export const LOGOUT = 'LOGOUT';

export const TOGGLE_EDIT_PROFILE = 'TOGGLE_EDIT_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_CANCEL = 'UPDATE_PROFILE_CANCEL';
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';

export const updateProfile = (profile) => {
  return dispatch => {
    dispatch(updateProfileRequest());
    return fetch('/api/user', {
      credentials: 'include',
      method: 'PATCH',
      body: profile
    })
      .then(response => response.json())
      .then(updatedProfile => {
        dispatch(updateProfileSuccess(updatedProfile));
      })
      .catch(error => {
        console.error(error);
        dispatch(updateProfileCancel());
      });
  };
};

export const updateProfileRequest = () => {
  return {
    type: UPDATE_PROFILE_REQUEST
  };
};

export const updateProfileSuccess = (updatedProfile) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    user: updatedProfile
  };
};

export const updateProfileCancel = () => {
  return {
    type: UPDATE_PROFILE_CANCEL
  };
};

export const checkAuth = () => {
  return dispatch => {
    return fetch('/api/auth/user', {
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

export const toggleEditingProfile = () => {
  return {
    type: TOGGLE_EDIT_PROFILE
  };
};
