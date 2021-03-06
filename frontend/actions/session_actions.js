export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

import * as APIUtil from '../util/api';

// synchronous actions
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = ({ errors }) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveUpdates = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


// thunk action creators
export const login = user => dispatch => {
  APIUtil
    .login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => dispatch => {
  APIUtil
    .logout()
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveErrors(error.responseJSON)));
};

export const signup = user => dispatch => {
  APIUtil
    .signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveErrors(error.responseJSON)));
};

export const updateUser = user => dispatch => {
  APIUtil
    .updateUser(user)
    .then(currentUser => dispatch(receiveUpdates(currentUser)),
          error => dispatch(receiveErrors(error.responseJSON)));
};
