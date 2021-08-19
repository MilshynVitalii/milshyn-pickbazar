import * as appApi from '../../api/app';
import {SHOW_ALERT,
  HIDE_ALERT,
  SET_MODAL,
  FETCH_CAROUSEL_DATA,
  FETCH_CATEGORIES,
  SET_ACTIVE_CATEGORY
} from '../types';

export function showAlert(text, type, time) {
  return async (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    });

    setTimeout(() => dispatch(hideAlert()), time)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function setModal(modal) {
  return {
    type: SET_MODAL,
    payload: modal
  }
}

export function fetchCarouselData() {
  return async (dispatch) => {
    const res = await appApi.getCarouselData();
    dispatch({
      type: FETCH_CAROUSEL_DATA,
      payload: res.data
    });
  }
}

export function fetchCategories() {
  return async (dispatch) => {
    const res = await appApi.fetchCategories();
    dispatch({
      type: FETCH_CATEGORIES,
      payload: res.data
    });
  }
}

export function setActiveCategory(parent = null, child = null) {
  return { 
    type: SET_ACTIVE_CATEGORY,
    payload: {
      parent,
      child
    }
  }
}