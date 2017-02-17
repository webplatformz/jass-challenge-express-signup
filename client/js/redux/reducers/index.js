import {combineReducers} from 'redux';
import {
    LOGIN_SUCCESS,
    AUTHENTICATE_GITHUB,
    AUTHENTICATE_BITBUCKET,
    LOGOUT,
    TOGGLE_EDIT_PROFILE,
    UPDATE_PROFILE_CANCEL,
    UPDATE_PROFILE_REQUEST
} from '../actions/index';

const initialState = {
    isAuthenticated: false,
    user: {
        profile: {}
    },
    isEditingProfile: false,
    isUpdatingProfile: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: action.isAuthenticated,
                user: action.user
            });

        case AUTHENTICATE_GITHUB:
            history.pushState({}, "github auth", "/api/auth/github");
            window.location = "/api/auth/github";
            return Object.assign({}, state);

        case AUTHENTICATE_BITBUCKET:
            history.pushState({}, "bitbucket auth", "/api/auth/bitbucket");
            window.location = "/api/auth/bitbucket";
            return Object.assign({}, state);

        case LOGOUT:
            history.pushState({}, "logout", "/api/auth/logout");
            window.location = "/api/auth/logout";
            return Object.assign({}, state);

        case TOGGLE_EDIT_PROFILE:
            return Object.assign({}, state, {
                isEditingProfile: !state.isEditingProfile
            });

        case UPDATE_PROFILE_REQUEST:
            return Object.assign({}, state, {
                isUpdatingProfile: true
            });

        case UPDATE_PROFILE_CANCEL:
            return Object.assign({}, state, {
                isEditingProfile: false,
            });

        default:
            return state;
    }
};

export default combineReducers({
    userReducer
});
