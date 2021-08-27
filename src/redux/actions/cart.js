import store from '../store'; 
import {ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART} from '../types'; 

export function addToCart(id) {
  const {products: {products}} = store.getState();
  return { 
    type: ADD_TO_CART,
    payload: products.find(product => product.id === id)
  }
}

export function changeCount(id, count) {
  return { 
    type: CHANGE_COUNT,
    payload: {
      id,
      count
    }
  }
}

export function removeFromCart(id) {
  return { 
    type: REMOVE_FROM_CART,
    payload: id
  }
}