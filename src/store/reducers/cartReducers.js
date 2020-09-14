import * as actionTypes from "../actionTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM_REQUEST:
      let { id, category, brand, model, image, price } = action.payload;
      if (state.cartItems.find((item) => item.id == id)) {
        return state;
      } else {
        return {
          cartItems: state.cartItems.concat([
            { id, category, brand, model, image, price },
          ]),
        };
      }
    case actionTypes.CART_ADD_ITEM_FAIL:
      return { error: action.payload };
    case actionTypes.CART_REMOVE_ITEM:
      const newCart = state.cartItems.filter(
        (item) => item.id != action.payload
      );
      return {
        cartItems: newCart,
      };
    default:
      return state;
  }
};
