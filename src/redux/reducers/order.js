import {FETCH_ORDER_DATA, SET_LOADED} from '../types';

const initialState = {
  isLoaded: false,
  data: {},
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_DATA: {
      return {
        ...state,
        data: action.payload,
        isLoaded: true
      }
    }
    case SET_LOADED: {
      return {
        ...state,
        isLoaded: action.payload
      }
    }
    default:
      return state;
  }
}

export default orderReducer;