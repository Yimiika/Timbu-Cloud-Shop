import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import { Item } from "../Items/Item";
import Axios from "axios";

export const RelatedProducts = () => {
  const [relatedProduct, setDataProduct] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.timbu.cloud/products?organization_id=97e320789817409eaf738cd1d86b6e91&page=1&size=4&Appid=IGZXARZAX5DMCMM&Apikey=28d4ecd5638545c6bc09300264d8baf920240712133124500163"
    ).then((res) => {
      setDataProduct(res.data.items);
    });
  }, []);
  return (
    <div className="relatedproducts">
      <h1>You may also like</h1>
      <div className="relatedproducts-item">
        {relatedProduct.map((item, i) => {
          const oldPrice = item.current_price[0].NGN[0];
          const newPrice = item.current_price[0].NGN[1];
          const discount = oldPrice
            ? Math.round(((oldPrice - newPrice) / oldPrice) * 100)
            : 0;

          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={`https://api.timbu.cloud/images/${item.photos[2].url}`}
              location={item.categories[0].name}
              new_price={newPrice}
              old_price={oldPrice}
              discount={discount}
              unique_id={item.unique_id}
            />
          );
        })}
      </div>
    </div>
  );
};
