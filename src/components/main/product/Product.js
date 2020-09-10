import React from "react";
import { useParams } from "react-router-dom";
//TODO: don't forget to delete
import { jsonData } from "../goods";

const Product = (props) => {
  const { id } = useParams();
  const item = JSON.parse(jsonData).find((val) => val.id == id);
  return (
    <div>
      <img src={process.env.PUBLIC_URL + item.image} alt={item.model} />
      <div className="p-4">
        <h2 className="font-semibold text-sm xl:text-3xl mb-1">{item.brand}</h2>
        <p className="text-xs xl:text-xl mb-1">{item.category}</p>
        <p className="text-xs xl:text-xl mb-1">
          {item.sizes.map((val) => val.us).join(" ")}
        </p>
        <p className="font-bold xl:text-xl text-xs">{item.price}$</p>
      </div>
    </div>
  );
};

export default Product;
