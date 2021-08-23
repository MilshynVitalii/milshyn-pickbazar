import { FETCH_PRODUCTS, SET_ACTIVE_PRODUCT, SET_PRODUCT_FETCHING} from '../types'; 

const initialState = {
  products: [],
  product: {},
  fetchingPosition: 0,
  fetchingLimit: 10,
  fetchMore: false,
  isProductFetching: false
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state, 
        products: action.payload.productsConcat ? [...state.products, ...action.payload.data] : action.payload.data, 
        fetchMore: !(action.payload.data.length < state.fetchingLimit)
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