import {
  PRODUCT_FETCHED,
  PRODUCT_CREATE_SUCCESS
} from "../product/product-action";

const initalState = [];

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case PRODUCT_FETCHED:
      console.log("WHERE IS PRODUCT FETCHED", ...action.payload);
      return [...action.payload.products];
    case PRODUCT_CREATE_SUCCESS:
      console.log("WhERE IS PRODUCT CREATE?", action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};
