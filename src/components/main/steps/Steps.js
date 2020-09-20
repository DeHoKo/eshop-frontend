import React, { useState } from "react";

const Steps = (props) => {
  const base =
    "inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";
  return (
    <div className="flex justify-between mb-2">
      <div
        className={props.step1 ? base + " bg-green-200" : base + " bg-gray-200"}
      >
        Signin
      </div>
      <div
        className={props.step2 ? base + " bg-green-200" : base + " bg-gray-200"}
      >
        Shipping
      </div>
      <div
        className={props.step3 ? base + " bg-green-200" : base + " bg-gray-200"}
      >
        Payment
      </div>
      <div
        className={props.step4 ? base + " bg-green-200" : base + " bg-gray-200"}
      >
        Place Order
      </div>
    </div>
  );
};

export default Steps;
