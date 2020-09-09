import React from "react";

import { jsonData } from "./goods";

const Main = () => {
  const sneakers = JSON.parse(jsonData);
  return (
    <main>
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
      <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 my-6">
        {sneakers.map((item) => (
          <a href="/" key={item.id}>
            <img src={process.env.PUBLIC_URL + item.image} alt={item.model} />
            <div className="p-4">
              <h2 className="font-semibold text-sm xl:text-3xl mb-1">
                {item.brand}
              </h2>
              <p className="text-xs xl:text-xl mb-1">{item.category}</p>
              <p className="text-xs xl:text-xl mb-1">
                {item.sizes.map((val) => val.us).join(" ")}
              </p>
              <p className="font-bold xl:text-xl text-xs">{item.price}$</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
};

export default Main;
