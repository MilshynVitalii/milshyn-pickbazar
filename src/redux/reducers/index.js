import { combineReducers } from 'redux';

import auth from './auth';
import app from './app';

const rootReducer = combineReducers({
  app,
  auth
});
  
export default rootReducer;