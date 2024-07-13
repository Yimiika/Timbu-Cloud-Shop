import React from "react";
import "./ProductImage.css";

export const ProductImage = (props) => {
  const { product } = props;

  console.log("log", product);

  return (
    <div className="productimage">
      <div className="productdisplay-img-left">
        <img
          className="productdisplay-main-img"
          src={`https://api.timbu.cloud/images/${product?.photos[2]?.url}`}
          alt=""
        />
      </div>
      <div className="productdisplay-img-right">
        <img
          src={`https://api.timbu.cloud/images/${product?.photos[1]?.url}`}
          alt=""
        />
        <img
          src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
          alt=""
        />
      </div>
    </div>
  );
};
