import { combineReducers } from 'redux';
import { devReducer } from './single/devReducer';
import { clientReducer } from './single/clientReducer';

export default combineReducers({
  devReducer,
  clientReducer
})