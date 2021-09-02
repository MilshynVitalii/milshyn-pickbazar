import { combineReducers } from 'redux';

import auth from './auth';
import app from './app';
import products from './products';
import cart from './cart';
import checkout from './checkout';
import order from './order';

const rootReducer = combineReducers({
  app,
  auth,
  products,
  cart,
  checkout,
  order
});
  
export default rootReducer;