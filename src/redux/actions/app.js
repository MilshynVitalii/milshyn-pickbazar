import * as appApi from '../../api/app';
import {SHOW_ALERT,
  HIDE_ALERT,
  SET_MODAL,
  SET_CHECKOUT_MODAL,
  FETCH_CAROUSEL_DATA,
  FETCH_CATEGORIES,
  SET_ACTIVE_CATEGORY
} from '../types';

const showAlert = (text, type, time) => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    });

    setTimeout(() => dispatch(hideAlert()), time)
  }
}

const hideAlert = () => ({type: HIDE_ALERT});

const setModal = (modal) => ({
  type: SET_MODAL,
  payload: modal
});

const setCheckoutModal = (modal) => ({
  type: SET_CHECKOUT_MODAL,
  payload: modal
});

const fetchCarouselData = () => {
  return async (dispatch) => {
    const res = await appApi.getCarouselData();
    dispatch({
      type: FETCH_CAROUSEL_DATA,
      payload: res.data
    });
  }
}

const fetchCategories = () => {
  return async (dispatch) => {
    const res = await appApi.fetchCategories();
    dispatch({
      type: FETCH_CATEGORIES,
      payload: res.data
    });
  }
}

const setActiveCategory = (parent = null, child = null) => {
  return { 
    type: SET_ACTIVE_CATEGORY,
    payload: {
      parent,
      child
    }
  }
}

export {setActiveCategory, fetchCategories, fetchCarouselData, showAlert, hideAlert, setModal, setCheckoutModal};