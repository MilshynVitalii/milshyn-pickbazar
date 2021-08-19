import {
  FETCH_PRODUCTS, 
  FETCH_MORE_PRODUCTS, 
  FETCH_BY_PARENT_CATEGORY, 
  FETCH_BY_CHILD_CATEGORY,
  SET_ACTIVE_PRODUCT,
  SET_PRODUCT_FETCHING
} from '../types'; 

const initialState = {
  products: [],
  product: {},
  fetchMore: false,
  isProductFetching: false
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state, 
        products: action.payload, 
        fetchMore: !(action.payload.length < 10)
      }
    case FETCH_MORE_PRODUCTS:
      return {
        ...state, 
        products:  [...state.products, ...action.payload], 
        fetchMore: !(action.payload.length < 10)
      }
    case FETCH_BY_PARENT_CATEGORY:
      return {
        ...state, 
        products: action.payload, 
        fetchMore: !(action.payload.length < 10)
      }
    case FETCH_BY_CHILD_CATEGORY:
      return {
        ...state, 
        products: action.payload, 
        fetchMore: !(action.payload.length < 10)
      }
    case SET_ACTIVE_PRODUCT:
      return {
        ...state, 
        product: action.payload
      }
    case SET_PRODUCT_FETCHING:
      return {
        ...state, 
        isProductFetching: action.payload
      }
    default:
      return state
  }
}

export default productsReducer;