import axios from "axios";
import * as actionTypes from "../actionTypes";

import cookie from "js-cookie";

const url = "http://localhost:3001";

export const addToCart = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(url + "/api/products/" + productId);
    if (data.quantity > 0) {
      dispatch({
        type: actionTypes.CART_ADD_ITEM_REQUEST,
        payload: {
          _id: data._id,
          category: data.category,
          brand: data.brand,
          model: data.model,
          image: data.image,
          price: data.price,
        },
      });
      const state = getState();
      const cart = state.cart.cartItems;
      cookie.set("cartItems", JSON.stringify(cart));
    } else {
      throw new Error("Not in stock");
    }
  } catch (error) {
    dispatch({
      type: actionTypes.CART_ADD_ITEM_FAIL,
      payload: error.message,
    });
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId,
  });
  const state = getState();
  const cart = state.cart.cartItems;
  cookie.set("cartItems", JSON.stringify(cart));
};

export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: actionTypes.CART_SAVE_SHIPPING, payload: data });
};

export const savePayment = (data) => (dispatch) => {
  dispatch({ type: actionTypes.CART_SAVE_PAYMENT, payload: data });
};

export const addOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.CART_ORDER_ADD_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    let data;
    data = await axios.post(
      url + "/api/orders",
      {
        products: order.cartItems,
        price: order.totalPrice,
        shipping: order.shipping,
      },
      {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      }
    );
    dispatch({ type: actionTypes.CART_ORDER_ADD_SUCCESS, payload: data });
    cookie.set("cartItems", []);
  } catch (error) {
    dispatch({ type: actionTypes.CART_ORDER_ADD_FAIL, payload: error.message });
  }
};
