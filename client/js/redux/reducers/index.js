import { combineReducers } from 'redux';
import { CHECK_AUTH, LOGIN_SUCCESS, AUTHENTICATE_GITHUB, AUTHENTICATE_BITBUCKET, LOGOUT, TOGGLE_EDIT_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_CANCEL, UPDATE_PROFILE_REQUEST } from '../actions';

const initialState = {
  isAuthenticated: false,
  user: {},
  isEditingProfile: false,
  profileForm: {
    email: '',
    matrikel: '',
    school: ''
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        user: action.user
      });

    case AUTHENTICATE_GITHUB:
      history.pushState({}, "github auth", "http://127.0.0.1:55555/auth/github");
      window.location = "http://127.0.0.1:55555/auth/github";
      return Object.assign({}, state);

    case AUTHENTICATE_BITBUCKET:
      history.pushState({}, "bitbucket auth", "http://127.0.0.1:55555/auth/bitbucket");
      window.location = "http://127.0.0.1:55555/auth/bitbucket";
      return Object.assign({}, state);

    case LOGOUT:
      history.pushState({}, "logout", "http://127.0.0.1:55555/auth/logout");
      window.location = "http://127.0.0.1:55555/auth/logout";
      return Object.assign({}, state);

    case TOGGLE_EDIT_PROFILE:
      return Object.assign({}, state, {
        isEditingProfile: !state.isEditingProfile
      });

    case UPDATE_PROFILE_REQUEST:
      return Object.assign({}, state, {
        isUpdatingProfile: true
      });

    case UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isUpdatingProfile: false,
        profileForm: {},
        user: action.user
      });

    case UPDATE_PROFILE_CANCEL:
      return Object.assign({}, state, {
        isUpdatingProfile: false
      });

    default:
      return state;
  }
};

export default combineReducers({
  userReducer
});
