import React, { useContext, useState, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { PaymentPopup } from "../PaymentPopup/PaymentPopup";

export const CartItems = () => {
  const {
    getTotalCartAmount,
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearItemFromCart,
  } = useContext(ShopContext);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const isLargeScreen = () => {
    return window.innerWidth >= 768;
  };

  const handleBuyNow = () => {
    if (isLargeScreen()) {
      setIsPopUpVisible(true);
    } else {
      window.location.href = "/checkoutmobile";
    }
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPopUpVisible(isPopUpVisible);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPopUpVisible]);

  return (
    <div className="cart">
      <div className="cartitems-name">
        <p>Shopping Cart</p>
      </div>
      <div className="cartitems">
        <div className="cartitems-left">
          <hr className="hrmobile" />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img
                      src={e.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                    <div className="cart-name-details">
                      <p>{e.name}</p>
                      <div className="cart-items-sizes">
                        <p className="cart-items-sizes-text">Sizes</p>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                      </div>
                    </div>
                    <div className="cart-items-number">
                      <button
                        className="cartitems-decrease"
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                      >
                        -
                      </button>
                      <button className="cartitems-quantity">
                        {cartItems[e.id]}
                      </button>
                      <button
                        className="cartitems-increase"
                        onClick={() => {
                          addToCart(e.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p className="cartitemstotal">
                        N{e.new_price * cartItems[e.id]}
                      </p>
                      <p
                        className="cartitems-remove"
                        onClick={() => {
                          clearItemFromCart(e.id);
                        }}
                      >
                        Remove
                      </p>
                    </div>
                    <div className="cart-items-mobile">
                      <div className="cart-mobile-details">
                        <p>{e.name}</p>
                        <div className="cart-items-sizes ">
                          <p className="cart-items-sizes-text">Sizes</p>
                          <div>S</div>
                          <div>M</div>
                          <div>L</div>
                          <div>XL</div>
                          <div>XXL</div>
                        </div>
                      </div>
                      <div className="cart-mobile-bottom">
                        <div className="cart-items-mobile-number">
                          <button
                            className="cartitems-decrease"
                            onClick={() => {
                              removeFromCart(e.id);
                            }}
                          >
                            -
                          </button>
                          <button className="cartitems-quantity">
                            {cartItems[e.id]}
                          </button>
                          <button
                            className="cartitems-increase"
                            onClick={() => {
                              addToCart(e.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="cartpricemobile">
                          <p className="cartmobiletotal">
                            N{e.new_price * cartItems[e.id]}
                          </p>
                          <p
                            className="cartmobile-remove"
                            onClick={() => {
                              clearItemFromCart(e.id);
                            }}
                          >
                            Remove
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Order Details</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal ({getTotalCartItems()} items)</p>
                <p>N{getTotalCartAmount()}</p>
              </div>
              <div className="cartitems-total-item">
                <p>Shipping and handling fees</p>
                <p>Free</p>
              </div>
              <div className="cartitems-promo">
                <div className="cartitems-promobox">
                  <input type="text" placeholder="Discount Code or Gift Card" />
                </div>
                <div className="cartitems-promobox-button">
                  <button>Apply</button>
                </div>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Grand Total</h3>
                <h3>N{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button onClick={handleBuyNow}>BUY NOW</button>
          </div>
        </div>
        {isPopUpVisible && <PaymentPopup closePopUp={closePopUp} />}
      </div>
    </div>
  );
};
