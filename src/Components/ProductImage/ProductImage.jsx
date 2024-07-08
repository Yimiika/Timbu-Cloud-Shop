import React from "react";
import "./ProductImage.css";

export const ProductImage = (props) => {
  const { product } = props;

  return (
    <div className="productimage">
      <div className="productdisplay-img-left">
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
      <div className="productdisplay-img-right">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
    </div>
  );
};
