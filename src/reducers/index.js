import { combineReducers } from 'redux';
import { devReducer } from './single/devReducer';
import { clientReducer } from './single/clientReducer';
import { teamReducer } from './single/teamReducer';
import { projectReducer } from './single/projectReducer';

export default combineReducers({
  devReducer,
  clientReducer,
  teamReducer,
  projectReducer
});