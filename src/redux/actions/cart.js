import store from '../store'; 
import * as cart from '../../api/cart';
import {ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART, CLEAN_CART, FETCH_CART} from '../types'; 

const addToCart = (id) => {
  const {products: {products}} = store.getState();
  const sessionCart = JSON.parse(sessionStorage.getItem('cartProducts')) || {};
  sessionCart[id] = {count: 1};
  sessionStorage.setItem('cartProducts', JSON.stringify(sessionCart));

  return { 
    type: ADD_TO_CART,
    payload: products.find(product => product.id === id)
  }
}

const changeCount = (id, count) => {
  const sessionCart = JSON.parse(sessionStorage.getItem('cartProducts'));
  sessionCart[id] = {count};
  sessionStorage.setItem('cartProducts', JSON.stringify(sessionCart));
  
  return { 
    type: CHANGE_COUNT,
    payload: {id, count}
  }
};

const removeFromCart = (id) => {
  const sessionCart = JSON.parse(sessionStorage.getItem('cartProducts'));
  delete sessionCart[id];
  sessionStorage.setItem('cartProducts', JSON.stringify(sessionCart));

  return { 
    type: REMOVE_FROM_CART,
    payload: id
  }
};

const fetchCartProducts = (data) => {
  const sessionCart = JSON.parse(sessionStorage.getItem('cartProducts'));

  return async(dispatch) => {
    const res = await cart.fetchProducts({params: {id: data}});

    for(const key in sessionCart) {
      if(sessionCart.hasOwnProperty(key)) {
        sessionCart[key] = {...sessionCart[key], ...res.data.find(data => data.id === Number(key))}
      }
    }

    dispatch({ 
      type: FETCH_CART,
      payload: {
        data: sessionCart,
        length: res.data.length
      }
    });
  }
};

const cleanCart = () => ({type: CLEAN_CART});

export {addToCart, changeCount, removeFromCart, cleanCart, fetchCartProducts};