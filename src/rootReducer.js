import { combineReducers } from "redux";
import userReducer from "../src/user/user-reducer";
import productReducer from "../src/product/product-reducer";

export default combineReducers({
  userData: userReducer,
  productData: productReducer
});
