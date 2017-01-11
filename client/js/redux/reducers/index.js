import { combineReducers } from 'redux';
import { LOGIN, RECEIVE_USER, GET_USER, REQUEST_LOGIN, LOGIN_SUCCESS } from '../actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true
      });
    case GET_USER:
      return state;
    case RECEIVE_USER:
      return Object.assign({}, state, {
        user: action.user
      });

    default:
      return state;
  }
};

export default combineReducers({
  userReducer
});
