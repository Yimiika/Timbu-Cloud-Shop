import React from "react";
import { CartItems } from "../Components/CartItems/CartItems";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

export const Cart = () => {
  return (
    <div>
      <CartItems />
      <RelatedProducts />
    </div>
  );
};
