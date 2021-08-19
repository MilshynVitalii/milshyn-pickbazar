import { combineReducers } from 'redux';

import auth from './auth';
import app from './app';
import products from './products';

const rootReducer = combineReducers({
  app,
  auth,
  products
});
  
export default rootReducer;