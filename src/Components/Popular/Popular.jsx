import React, { useEffect, useState, forwardRef } from "react";
import "./Popular.css";
import { Item } from "../Items/Item";
import Axios from "axios";
import { Pagination } from "../Pagination/Pagination";

export const Popular = forwardRef((props, ref) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    Axios.get(
      "https://api.timbu.cloud/products?organization_id=97e320789817409eaf738cd1d86b6e91&Appid=IGZXARZAX5DMCMM&Apikey=28d4ecd5638545c6bc09300264d8baf920240712133124500163"
    ).then((res) => {
      setDataProduct(res.data.items);
      console.log(res.data.items);
    });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataProduct.slice(firstPostIndex, lastPostIndex);

  return (
    <div ref={ref} className="popular">
      <h1>Our Products</h1>
      <div className="popular-item">
        {currentPosts.map((item, i) => (
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
        ))}
      </div>
      <hr />
      <Pagination
        totalPosts={dataProduct.length}
        postsPerPage={postsPerPage}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
});
