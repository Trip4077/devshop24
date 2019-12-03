import { combineReducers } from 'redux';
import { devReducer } from './single/devReducer';
import { clientReducer } from './single/clientReducer';
import { teamReducer } from './single/teamReducer';

export default combineReducers({
  devReducer,
  clientReducer,
  teamReducer
});