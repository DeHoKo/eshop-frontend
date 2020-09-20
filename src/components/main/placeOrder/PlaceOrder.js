import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addOrder } from "../../../store/actions/cartActions";
import Steps from "../steps/Steps";

const PlaceOrder = () => {
  const { cartItems, shipping, payment } = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();
  if (!shipping.address) {
    history.push("/shipping");
  }
  if (!payment) {
    history.push("/payment");
  }
  let totalPrice = 0;
  if (cartItems) {
    totalPrice = cartItems.reduce((accum, value) => accum + value.price, 0);
  }
  const placeOrderHandler = () => {
    dispatch(addOrder({ cartItems, totalPrice, shipping }));
    history.push("/");
  };

  return (
    <section className="container mx-auto">
      <Steps step1 step2 step3 step4 />
      <div className="mb-2">
        <h3 className="font-semibold text-2xl uppercase">Shipping</h3>
        <div>
          <span className="font-medium">Address:</span> {shipping.address}
        </div>
        <div>
          <span className="font-medium">City:</span> {shipping.city}
        </div>
        <div>
          <span className="font-medium">Postal Code:</span> {shipping.postal}
        </div>
        <div>
          <span className="font-medium">Country:</span> {shipping.country}
        </div>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold text-2xl uppercase">Payment</h3>
        <div>
          <span className="font-medium">Payment method:</span> {payment}
        </div>
      </div>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={item._id} className="mt-2">
              <Link to={"/products/" + item._id} className="grid grid-cols-12">
                <span className="col-span-1">{index + 1}.</span>
                <span className="col-span-3">{item.category}</span>
                <span className="col-span-2">{item.brand}</span>
                <span className="col-span-4">{item.model}</span>
                <span className="col-span-1">{item.price}$</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="flex justify-end items-center h-16">
        {cartItems.length > 0 ? (
          <span className="font-bold">Total price: {totalPrice}$</span>
        ) : (
          <span>Add items to cart</span>
        )}
      </div>
      <button
        className="flex items-center justify-center w-full p-4 font-semibold text-2xl uppercase tracking-widest bg-teal-200 disabled:bg-gray-200 disabled:opacity-75"
        disabled={!cartItems.length}
        onClick={placeOrderHandler}
      >
        Place Order
      </button>
    </section>
  );
};

export default PlaceOrder;
