import React, { useRef } from "react";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";

export const Shop = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero scrollToProducts={scrollToProducts} />
      <div ref={productsRef}>
        <Popular ref={productsRef} />
      </div>
    </>
  );
};
