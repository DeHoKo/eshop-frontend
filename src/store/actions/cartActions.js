import axios from "axios";
import * as actionTypes from "../actionTypes";

const url = "http://localhost:3001";

export const addToCart = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.get(url + "/api/products/" + productId);
    if (data.quantity > 0) {
      dispatch({
        type: actionTypes.CART_ADD_ITEM_REQUEST,
        payload: {
          id: data.id,
          category: data.category,
          brand: data.brand,
          model: data.model,
          image: data.image,
          price: data.price,
        },
      });
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

export const removeFromCart = (productId) => {
  return {
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId,
  };
};
