import React from "react";

const Filter = () => {
  return (
    <section className="h-8 xl:h-10 border-b-2 border-gray-200">
      <div className="container mx-auto h-full flex justify-end ">
        <button className="flex items-center h-full px-4">
          <span className="text-xs xl:text-xl pr-4">Filter</span>
          <svg
            className="w-3 h-3 xl:w-6 xl:h-6"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.800003 8.59999L4.4 4.99999L0.800003 1.39999"
              stroke="black"
              stroke-linecap="square"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Filter;
