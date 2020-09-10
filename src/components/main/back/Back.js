import React from "react";
import { useHistory } from "react-router-dom";

const Back = () => {
  const history = useHistory();

  return (
    <section className="h-8 xl:h-10 border-b-2 border-gray-200">
      <div className="container mx-auto h-full flex justify-start ">
        <button
          className="flex items-center h-full px-4"
          onClick={history.goBack}
        >
          <svg
            className="w-3 h-3 xl:w-6 xl:h-6"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2 8.59999L1.6 4.99999L5.2 1.39999"
              stroke="black"
              stroke-linecap="square"
            />
          </svg>
          <span className="text-xs xl:text-xl pl-4">Back</span>
        </button>
      </div>
    </section>
  );
};

export default Back;
