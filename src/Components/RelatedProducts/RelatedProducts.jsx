import React from "react";
import "./RelatedProducts.css";
import related_product from "../Assets/relatedproducts";
import { Item } from "../Items/Item";

export const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>You may also like</h1>
      <div className="relatedproducts-item">
        {related_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              location={item.location}
              new_price={item.new_price}
              old_price={item.old_price}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
};
