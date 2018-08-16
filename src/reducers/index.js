import { combineReducers } from "redux";
import products from "./productsReducer";
import user from "./userReducer";
import cartItems from "./cartItemsReducer";

export default combineReducers({
  products,
  user,
  cartItems
});
