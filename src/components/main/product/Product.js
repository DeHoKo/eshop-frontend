import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { detailsProduct } from "../../../store/actions/productActions";

const Product = () => {
  const { id } = useParams();
  const history = useHistory();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, []);

  const addToCartHandler = () => {
    history.push("/cart/" + id);
  };

  return loading === false ? (
    <div>
      <img
        src={process.env.PUBLIC_URL + product.data.image}
        alt={product.data.model}
      />
      {product.data.quantity > 0 ? (
        <button
          onClick={addToCartHandler}
          className="flex items-center justify-center w-full p-4 font-semibold text-2xl uppercase tracking-widest bg-teal-200"
        >
          Buy IT!
        </button>
      ) : (
        <div className="flex items-center justify-center w-full p-4 font-semibold text-2xl uppercase tracking-widest bg-grey-200">
          Out of stock
        </div>
      )}
      {product.data.tags.length ? (
        <div className="px-2 pt-4">
          {product.data.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-4 py-2 font-semibold mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="p-4">
        <h2 className="font-semibold text-2xl xl:text-3xl mb-1">
          {product.data.brand}
        </h2>
        <p className="text-lg xl:text-xl mb-1">{product.data.category}</p>
        <p className="text-lg xl:text-xl mb-1">
          US: {product.data.sizes.map((val) => val.us).join(" ")}
        </p>
        <p className="font-bold text-lg xl:text-xl">{product.data.price}$</p>
      </div>
    </div>
  ) : null;
};

export default Product;
