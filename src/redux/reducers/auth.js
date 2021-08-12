import {SIGN_UP, SIGN_IN, GOOGLE_SIGN_IN, SET_LOGINED} from '../types'; 

const initialState = {
    logined: false,
    userData: ''
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {...state, logined: true, userData: action.payload}
    case SIGN_IN:
      return {...state, logined: true, userData: action.payload}
    case GOOGLE_SIGN_IN:
      return {...state, logined: true, userData: action.payload}
    case SET_LOGINED:
      return {...state, logined: action.payload}
    default:
      return state
  }
}

export default authReducer;