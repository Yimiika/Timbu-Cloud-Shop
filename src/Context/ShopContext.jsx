import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    Axios.get(
      "/api/products?organization_id=97e320789817409eaf738cd1d86b6e91&Appid=IGZXARZAX5DMCMM&Apikey=28d4ecd5638545c6bc09300264d8baf920240712133124500163"
    ).then((res) => {
      setAllProducts(res.data.items);
      setCartItems(getDefaultCart(res.data.items));
    });
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    products.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const clearItemFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: 0,
    }));
  };

  const clearCart = () => {
    let clearedCart = {};
    for (const item in cartItems) {
      clearedCart[item] = 0;
    }
    setCartItems(clearedCart);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = allProducts.find((product) => product.id === item);
      if (itemInfo) {
        totalAmount += itemInfo.current_price[0].NGN[1] * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    clearItemFromCart,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
