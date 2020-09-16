import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userSigninReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import cookies from "js-cookie";

const cartItems = cookies.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
