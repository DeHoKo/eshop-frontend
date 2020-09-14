import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { removeFromCart } from "../../../store/actions/cartActions";

const Cart = () => {
  const { cartItems, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const checkOutHandler = () => {
    history.push("/signin?redirect=shipping");
  };

  const removeHandler = (productId) => {
    return (e) => {
      if (e.target.tagName == "BUTTON") {
        e.preventDefault();
        dispatch(removeFromCart(productId));
      }
    };
  };

  return (
    <section className="container mx-auto">
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={item.id} className="mt-2">
              <Link
                to={"/products/" + item.id}
                className="grid grid-cols-12"
                onClick={removeHandler}
              >
                <span className="col-span-1">{index + 1}.</span>
                <span className="col-span-3">{item.category}</span>
                <span className="col-span-2">{item.brand}</span>
                <span className="col-span-4">{item.model}</span>
                <span className="col-span-1">{item.price}$</span>
                <button className="col-span-1" onClick={removeHandler(item.id)}>
                  Remove
                </button>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="flex justify-end items-center h-16">
        {cartItems.length > 0 ? (
          <span className="font-bold">
            Total price:{" "}
            {cartItems.reduce((accum, value) => accum + value.price, 0)}$
          </span>
        ) : (
          <span>Add items to cart</span>
        )}
      </div>
      <button
        className="flex items-center justify-center w-full p-4 font-semibold text-2xl uppercase tracking-widest bg-teal-200 disabled:bg-gray-200 disabled:opacity-75"
        disabled={!cartItems.length}
        onClick={checkOutHandler}
      >
        Checkout
      </button>
    </section>
  );
};

export default Cart;
