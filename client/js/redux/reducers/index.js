import { combineReducers } from 'redux';
import { LOGIN } from '../actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        user: action.user
      });

    default:
      return state;
  }
};

export default combineReducers({
  userReducer
});
