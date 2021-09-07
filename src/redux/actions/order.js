import * as order from '../../api/order';
import {FETCH_ORDER_DATA, SET_LOADED} from '../types';

const fetchOrderData = (data) => {
  return async (dispatch) => {
    const res = await order.fetchOrderData(data);
    dispatch({type: FETCH_ORDER_DATA, payload: res.data});
  }
}

const setLoaded = (loaded) => ({
  type: SET_LOADED,
  payload: loaded
});

export {fetchOrderData, setLoaded};