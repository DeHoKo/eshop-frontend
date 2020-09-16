import * as actionTypes from "../actionTypes";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
