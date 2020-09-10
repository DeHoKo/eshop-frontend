import React from "react";
import { Link } from "react-router-dom";

const Products = ({ sneakers }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 my-6">
      {sneakers.map((item) => (
        <Link to={"/products/" + item.id} key={item.id}>
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
        </Link>
      ))}
    </section>
  );
};

export default Products;
