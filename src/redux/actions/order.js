import * as order from '../../api/order';
import {FETCH_ORDER_DATA, SET_LOADED} from '../types';

export function fetchOrderData(data) {
  return async (dispatch) => {
    const res = await order.fetchOrderData(data);
    dispatch({type: FETCH_ORDER_DATA, payload: res.data});
  }
}

export function setLoaded(loaded) {
  return {
    type: SET_LOADED,
    payload: loaded
  }
}