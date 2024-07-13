import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Item } from "../Items/Item";
import Axios from "axios";

export const Popular = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.timbu.cloud/products?organization_id=97e320789817409eaf738cd1d86b6e91&Appid=IGZXARZAX5DMCMM&Apikey=28d4ecd5638545c6bc09300264d8baf920240712133124500163"
    ).then((res) => {
      setDataProduct(res.data.items);
      console.log(res.data.items);
    });
  }, []);

  return (
    <div className="popular">
      <h1>Our Products</h1>
      <div className="popular-item">
        {dataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={`https://api.timbu.cloud/images/${item.photos[2].url}`}
              location={item.categories[0].name}
              new_price={item.current_price[0].NGN[1]}
              old_price={item.current_price[0].NGN[0]}
              discount={item.discount}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
};
