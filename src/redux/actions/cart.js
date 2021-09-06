import store from '../store'; 
import {ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART, CLEAN_CART} from '../types'; 

const addToCart = (id) => {
  const {products: {products}} = store.getState();
  return { 
    type: ADD_TO_CART,
    payload: products.find(product => product.id === id)
  }
}

const changeCount = (id, count) => ({ 
  type: CHANGE_COUNT,
  payload: {id, count}
});

const removeFromCart = (id) => ({ 
  type: REMOVE_FROM_CART,
  payload: id
});

const cleanCart = () => ({type: CLEAN_CART});

export {addToCart, changeCount, removeFromCart, cleanCart};