import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { listProducts } from "../../../store/actions/productActions";

const Products = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 my-6">
      {loading === false
        ? products.data.map((item) => (
            <Link to={"/products/" + item._id} key={item._id}>
              <img src={process.env.PUBLIC_URL + item.image} alt={item.model} />
              <div className="p-4">
                <h2 className="font-semibold text-sm xl:text-3xl mb-1">
                  {item.brand}
                </h2>
                <p className="text-xs xl:text-xl mb-1">{item.category}</p>
                <p className="text-xs xl:text-xl mb-1">
                  {item.sizes.map((val) => val).join(" ")}
                </p>
                <p className="font-bold xl:text-xl text-xs">{item.price}$</p>
              </div>
            </Link>
          ))
        : null}
    </section>
  );
};

export default Products;
