import api from '../api/user';
import fetch from 'isomorphic-fetch';

export const TRY_LOGIN = 'TRY_LOGIN';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_USER = 'GET_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const requestLogin = () => ({
  type: REQUEST_LOGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const tryLogin = () => {

  const request = {
    method: 'GET',
    redirect: 'follow',
    mode: 'cors'
  };

  return dispatch => {
    dispatch(requestLogin());
    return fetch(`http://localhost:55555/auth/github`, request)
      .then(response => response.json())
      .then(json => dispatch(loginSuccess(json)));
  };
};

export const getUser = () => ({
  type: GET_USER
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user
});

export const fetchUser = () => {
  return dispatch => {
    dispatch(getUser());
    return fetch(`http://localhost:55555/auth/user`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
  };
};
