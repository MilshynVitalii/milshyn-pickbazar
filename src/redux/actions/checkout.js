import store from '../store';
import {ADD_CHECKOUT_DATA, DELETE_CHECKOUT_DATA, SET_ITEM_TO_CHANGE, SET_ACTIVE_ITEM} from '../types'; 

const addCheckoutData = (type, data) => {
  const {checkout} = store.getState();
  data.id = checkout.itemToChange || Date.now();

  if(type === 'checkout_phone') data.title = 'Phone number';
  
  const dataByAction = checkout.itemToChange
      ? checkout[type].map(dt => dt.id !== checkout.itemToChange ? dt : {...data})
      : checkout[type].concat([data]);
  
  localStorage.setItem(type, JSON.stringify(dataByAction));

  return { 
    type: ADD_CHECKOUT_DATA,
    payload: {
      type,
      data: dataByAction
    }
  }
}

const deleteCheckoutData = (type, id) => {
  const {checkout} = store.getState();
  const data = checkout[type].filter(dt => dt.id !== id);
  localStorage.setItem(type, JSON.stringify(data));

  return { 
    type: DELETE_CHECKOUT_DATA,
    payload: {
      type,
      data
    }
  }
}

const changeCheckoutItem = (id) => ({ 
  type: SET_ITEM_TO_CHANGE,
  payload: id
});

const setActiveItem = (type, id) => ({
  type: SET_ACTIVE_ITEM,
  payload: {type, id}
});

export {addCheckoutData, deleteCheckoutData, changeCheckoutItem, setActiveItem};