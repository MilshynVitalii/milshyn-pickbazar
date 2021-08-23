import store from '../store';
import * as productsApi from '../../api/products';
import {FETCH_PRODUCTS, SET_ACTIVE_PRODUCT, SET_PRODUCT_FETCHING} from '../types';

export function fetchProducts(config = {}, productsConcat = false) {
  const {app: {activeCategory}, products: {fetchingPosition, fetchingLimit}} = store.getState();

  return async (dispatch) => {
    const res = await productsApi.fetchProducts({
      params: {
        _start: config.start || fetchingPosition,
        _limit: config.limit || fetchingLimit,
        'category.parentCategory.id': config.parent || activeCategory.parent,
        category: config.child || activeCategory.child
      }
    });
    
    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        data: res.data,
        productsConcat
      }
    });
  }
}

export function setActiveProduct(id){
  return async (dispatch) => {
    dispatch({type: SET_PRODUCT_FETCHING, payload: true});
    const res = await productsApi.fetchProducts({params: {id}});
    dispatch({
      type: SET_ACTIVE_PRODUCT,
      payload: res.data[0]
    });
    dispatch({type: SET_PRODUCT_FETCHING, payload: false});
  }
}