import {SHOW_ALERT, HIDE_ALERT, SET_MODAL} from '../types'; 

const initialState = {
  alert: {
    text: '',
    type: 'info'
  },
  modal: ''
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, alert: {...action.payload}}
    case HIDE_ALERT:
      return {...state, alert: {text: '', type: 'info'}}
    case SET_MODAL: {
      return {...state, modal: action.payload}
    }
    default:
      return state
  }
}

export default appReducer;