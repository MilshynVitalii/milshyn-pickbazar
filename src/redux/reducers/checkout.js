import {ADD_CHECKOUT_DATA, DELETE_CHECKOUT_DATA, SET_ITEM_TO_CHANGE, SET_ACTIVE_ITEM} from '../types';
import {checkoutData} from '../../pages/Checkout/constants';

const initialState = {
  checkout_address: JSON.parse(localStorage.getItem('checkout_address')) || [],
  checkout_phone: JSON.parse(localStorage.getItem('checkout_phone')) || [],
  checkout_schedule: checkoutData.find(data => data.type === 'checkout_schedule').items,
  checkout_payment: checkoutData.find(data => data.type === 'checkout_payment').items,
  active_items: {
    checkout_address: null,
    checkout_phone: null,
    checkout_schedule: null,
    checkout_payment: null
  },
  itemToChange: null
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKOUT_DATA: {
      return {
        ...state,
        [action.payload.type]: action.payload.data
      }
    }
    case DELETE_CHECKOUT_DATA: {
      return {
        ...state,
        [action.payload.type]: action.payload.data
      }
    }
    case SET_ACTIVE_ITEM: {
      return {
        ...state,
        active_items: {...state.active_items, [action.payload.type]: action.payload.id}
      }
    }
    case SET_ITEM_TO_CHANGE:
    return {
      ...state,
      itemToChange: action.payload
    }
    default:
      return state
  }
}

export default checkoutReducer;