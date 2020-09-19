import axios from "axios";
import * as actionTypes from "../actionTypes";

const url = "http://localhost:3001";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
    const data = await axios.get(url + "/api/products");
    dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_SAVE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    let data;
    if (product._id) {
      data = await axios.put(
        url + "/api/products/" + product._id,
        {
          category: product.category,
          brand: product.brand,
          model: product.model,
          image: product.image,
          price: product.price,
          color: product.color,
          newSizes: product.newSizes,
          newTags: product.newTags,
          quantity: product.quantity,
        },
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
    } else {
      data = await axios.post(
        url + "/api/products",
        {
          category: product.category,
          brand: product.brand,
          model: product.model,
          image: product.image,
          price: product.price,
          color: product.color,
          newSizes: product.newSizes,
          newTags: product.newTags,
          quantity: product.quantity,
        },
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
    }
    dispatch({ type: actionTypes.PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST, payload: productId });
    const data = await axios.get(url + "/api/products/" + productId);
    dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: actionTypes.PRODUCT_DELETE_REQUEST, payload: productId });
    const data = await axios.delete(url + "/api/products/" + productId, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: actionTypes.PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DELETE_FAIL,
      payload: error.message,
    });
  }
};
