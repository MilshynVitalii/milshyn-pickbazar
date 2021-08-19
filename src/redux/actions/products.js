import * as productsApi from '../../api/products';
import {
  FETCH_PRODUCTS,
  FETCH_BY_PARENT_CATEGORY,
  FETCH_BY_CHILD_CATEGORY,
  FETCH_MORE_PRODUCTS,
  SET_ACTIVE_PRODUCT,
  SET_PRODUCT_FETCHING
} from '../types';

export function fetchProducts(_start = 0, _limit = 10) {
  return async (dispatch) => {
    const res = await productsApi.fetchProducts({
      params: {
        _start,
        _limit
      }
    });
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data
    });
  }
}

export function fetchMoreProducts(_start = 0, _limit = 10, parentCategory = null, category = null) {
  return async (dispatch) => {
    const res = await productsApi.fetchProducts({
      params: {
        _start,
        _limit,
        'category.parentCategory.id': parentCategory,
        category
      }
    });
    dispatch({
      type: FETCH_MORE_PRODUCTS,
      payload: res.data
    });
  }
}

export function fetchByParentCategory(id) {
  return async (dispatch) => {
    const res = await productsApi.fetchProducts({params: {'category.parentCategory.id': id, _limit: 10}});
    dispatch({
      type: FETCH_BY_PARENT_CATEGORY,
      payload: res.data
    });
  }
}

export function fetchByChildCategory(id) {
  return async (dispatch) => {
    const res = await productsApi.fetchProducts({params: {category: id, _limit: 10}});
    dispatch({
      type: FETCH_BY_CHILD_CATEGORY,
      payload: res.data
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