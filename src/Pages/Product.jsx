import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";
import { ProductImage } from "../Components/ProductImage/ProductImage";
import Axios from "axios";

export const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://api.timbu.cloud/products/${productId}?organization_id=97e320789817409eaf738cd1d86b6e91&Appid=IGZXARZAX5DMCMM&Apikey=28d4ecd5638545c6bc09300264d8baf920240712133124500163`
    ).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);
  // const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <ProductImage product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};
