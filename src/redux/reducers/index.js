import { combineReducers } from 'redux';

import auth from './auth';
import app from './app';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
  app,
  auth,
  products,
  cart
});
  
export default rootReducer;