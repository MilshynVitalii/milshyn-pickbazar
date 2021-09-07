import {SHOW_ALERT,
  HIDE_ALERT,
  SET_MODAL,
  SET_CHECKOUT_MODAL,
  FETCH_CAROUSEL_DATA,
  FETCH_CATEGORIES,
  SET_ACTIVE_CATEGORY
} from '../types'; 

const initialState = {
  alert: {
    text: '',
    type: 'info'
  },
  modal: '',
  checkoutModal: '',
  carouselData: [],
  categories: [],
  activeCategory: {parent: null, child: null}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, alert: {...action.payload}}
    case HIDE_ALERT:
      return {...state, alert: {text: '', type: 'info'}}
    case SET_MODAL: {
      return {...state, modal: action.payload}
    }
    case SET_CHECKOUT_MODAL: {
      return {...state, checkoutModal: action.payload}
    }
    case FETCH_CAROUSEL_DATA: {
      return {...state, carouselData: [...action.payload]}
    }
    case FETCH_CATEGORIES:
      return {
        ...state, 
        categories: action.payload
      }
    case SET_ACTIVE_CATEGORY:
      return {
        ...state, 
        activeCategory: action.payload
      }
    default:
      return state
  }
}

export default appReducer;