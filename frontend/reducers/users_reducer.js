import { RECEIVE_USERS, RECEIVE_USER, RECEIVE_ERRORS } from '../actions/users_actions';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/comments_actions';
import merge from 'lodash/merge';

const NULLSTATE = Object.freeze({
  byId: {}
});

const projectsReducer = (state=NULLSTATE, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
    case RECEIVE_COMMENTS:
    case RECEIVE_COMMENT: 
      const byId = action.data.users.byId;
      return merge({}, state, { byId });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default projectsReducer;