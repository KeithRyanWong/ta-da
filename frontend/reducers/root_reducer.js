import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
  projects: projectsReducer
});

export default rootReducer;