import * as auth from '../../api/auth';
import {SIGN_UP, SIGN_IN, GOOGLE_SIGN_IN, SET_LOGINED} from '../types';
import {showAlert, setModal} from './app';

export function signUp(data) {
  return async (dispatch) => {
    try {
      const res = await auth.signUp(data);
      dispatch({type: SIGN_UP, payload: res.data.user});
      dispatch(showAlert('registration completed successfully', 'success', 3000));
      dispatch(setModal(''));
    } catch(e) {
      console.log(e.message);
    }
  };
}

export function signIn(data) {
  return async (dispatch) => {
    try {
      const res = await auth.signIn(data);
      dispatch({type: SIGN_IN, payload: res.data.user});
      dispatch(showAlert('logined successfully', 'success', 3000));
      dispatch(setModal(''));
    } catch(e) {
      console.log(e.message);
    }
  };
}

export function googleSignIn(data) {
  return async (dispatch) => {
    try {
      const res = await auth.googleSignIn(data);
      dispatch({type: GOOGLE_SIGN_IN, payload: res.data.user});
      dispatch(showAlert('logined successfully', 'success', 3000));
    } catch(e) {
      console.log(e.message);
    }
  };
}

export function setLogined(status) {
  return {
    type: SET_LOGINED,
    payload: status
  }
}