import React, { useState } from "react";
import Steps from "../steps/Steps";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../../../store/actions/cartActions";

const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    history.push("placeorder");
  };

  return (
    <div className="w-full max-w-md lg:mt-16 mx-auto">
      <Steps step1 step2 step3 />
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <h3 className="block text-gray-700 text-sm font-bold mb-2">
            Payment
          </h3>
          <input
            className="py-2 px-3 mr-2 text-gray-700 focus:outline-none focus:shadow-outline"
            id="paypal"
            type="radio"
            onChange={(e) => setPaymentMethod(e.target.value)}
            value="Paypal"
            checked={true}
          />
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="paypal"
          >
            paypal
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
