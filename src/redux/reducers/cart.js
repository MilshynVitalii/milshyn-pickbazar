import {ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART} from '../types'; 

const initialState = {
  products: {},
  cartItemsLength: 0
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if([action.payload.id] in state.products) return state;
      
      return {
        ...state,
        products: {...state.products, [action.payload.id]: {...action.payload, count: 1}},
        cartItemsLength: state.cartItemsLength + 1
      }
    case CHANGE_COUNT:
      const {id, count} = action.payload;

      return {
        ...state,
        products: {...state.products, [id]: {...state.products[id], count: count <= 1 ? 1 : count}}
      }
    case REMOVE_FROM_CART:
      const newStateProducts = {...state.products};
      delete newStateProducts[action.payload];

      return {
        ...state,
        products: newStateProducts,
        cartItemsLength: state.cartItemsLength - 1
      }
    default:
      return state
  }
}

export default cartReducer;