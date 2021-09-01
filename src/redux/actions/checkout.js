import store from '../store';
import {ADD_CHECKOUT_DATA, DELETE_CHECKOUT_DATA, SET_ITEM_TO_CHANGE, SET_ACTIVE_ITEM} from '../types'; 

export function addCheckoutData(type, data) {
  const {itemToChange} = store.getState();
  const checkoutData = type !== 'checkout_phone' ? data : {title: 'Phone number', description: data.phone};
  checkoutData.id =  itemToChange ? itemToChange : Date.now();
  return { 
    type: ADD_CHECKOUT_DATA,
    payload: {
      type,
      data: checkoutData
    }
  }
}

export function deleteCheckoutData(type, id) {
  return { 
    type: DELETE_CHECKOUT_DATA,
    payload: {
      type,
      id
    }
  }
}

export function changeCheckoutItem(id) {
  
  return { 
    type: SET_ITEM_TO_CHANGE,
    payload: id
  }
}

export function setActiveItem(type, id) {
  return { 
    type: SET_ACTIVE_ITEM,
    payload: {
      type,
      id
    }
  }
}