
import {SHOW_ALERT, HIDE_ALERT, SET_MODAL} from '../types';

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
