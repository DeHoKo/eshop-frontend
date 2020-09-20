import * as actionTypes from "../actionTypes";

export const cartReducer = (
  state = { cartItems: [], shipping: {}, payment: "" },
  action
) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM_REQUEST:
      let { _id, category, brand, model, image, price } = action.payload;
      if (state.cartItems.find((item) => item._id == _id)) {
        return state;
      } else {
        return {
          cartItems: state.cartItems.concat([
            { _id, category, brand, model, image, price },
          ]),
        };
      }
    case actionTypes.CART_ADD_ITEM_FAIL:
      return { error: action.payload };
    case actionTypes.CART_REMOVE_ITEM:
      const newCart = state.cartItems.filter(
        (item) => item._id != action.payload
      );
      return {
        cartItems: newCart,
      };
    case actionTypes.CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    case actionTypes.CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    case actionTypes.CART_ORDER_ADD_REQUEST:
      return { loading: true };
    case actionTypes.CART_ORDER_ADD_SUCCESS:
      return { loading: false, success: true, state };
    case actionTypes.CART_ORDER_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
