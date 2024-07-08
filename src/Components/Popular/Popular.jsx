import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import { Item } from "../Items/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>Our Products</h1>
      <div className="popular-item">
        {data_product.map((item, i) => {
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
      <hr />
    </div>
  );
};
