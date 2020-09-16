import axios from "axios";
import * as actionTypes from "../actionTypes";

import cookie from "js-cookie";

const url = "http://localhost:3001";

export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_SIGNIN_REQUEST });
    const { data } = await axios.post(url + "/api/users/signin", {
      email,
      password,
    });
    dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload: error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_REGISTER_REQUEST });
    const { data } = await axios.post(url + "/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });
    cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload: error.message,
    });
  }
};
