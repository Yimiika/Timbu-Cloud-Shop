import React, { useContext } from "react";
import "./ProductDisplay.css";
import profile_picture from "../Assets/profilepicture.png";
import { ShopContext } from "../../Context/ShopContext";
import heart_icon from "../Assets/heart_icon.svg";
import cart_small_icon from "../Assets/cart_small_icon.svg";

export const ProductDisplay = (props) => {
  const { product } = props;
  console.log("log", product);
  const discount =
    props.discount !== undefined ? Math.round(props.discount) : 0;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <h1>{product?.name}</h1>
        <div className="productdisplay-left-stars">
          <div className="profile-container">
            <img
              className="profile-picture"
              src={profile_picture}
              alt="Profile"
            />
          </div>
          <div className="profiledisplay-update">
            <h5>raphogah</h5>
            <p>Updated 13 minutes ago</p>
          </div>
        </div>
        <div className="productdisplay-left-size">
          <h1>Sizes</h1>
          <div className="productdisplay-left-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <h1>Find Similar Listings</h1>
          <div className="productdisplay-left-sizes">
            <div>By Size</div>
            <div>By Color</div>
            <div>Buy Now With Tags</div>
          </div>
          <div className="productdisplay-left-prices">
            <div className="productdisplay-left-price-new">
              N{product?.discounted_price}
            </div>
            <div className="productdisplay-left-price-old">
              N{product?.current_price}
            </div>
            {discount !== 0 && <div className="discount-rate">{discount}%</div>}
          </div>
          <button
            onClick={() => {
              addToCart(product?.id);
            }}
          >
            Buy Now
          </button>
          <div className="product-display-left-category">
            <p className="productdisplay-left-category heart-display">
              <img className="heart-icon" src={heart_icon} alt="heart-icon" />
              Like and save for later
            </p>
            <p
              className="productdisplay-left-category"
              onClick={() => {
                addToCart(product?.id);
              }}
            >
              <img
                className="cart_small_icon "
                src={cart_small_icon}
                alt="cart_small_icon "
              />{" "}
              Add to Cart
            </p>
          </div>
        </div>
      </div>
      <div className="productdisplay-right">
        <div className="descriptionbox-title">Sure Fit</div>
        <div className="descriptionbox-description">
          <p>
            Transform your look with our bold red jacket, designed to capture
            attention and exude confidence. This chic and versatile piece
            combines modern elegance with unmatched comfort, making it the
            perfect addition to any wardrobe. Whether you're dressing up for a
            night out or adding a pop of color to your everyday style, our red
            jacket ensures you stand out with sophistication and ease. Don't
            miss out on this must-have fashion statement.
          </p>
          <hr />
          <p>
            Copy Transform your look with our bold red jacket, designed to
            capture attention and exude confidence. This chic and versatile
            piece combines modern elegance with unmatched comfort, making it the
            perfect addition to any wardrobe. Whether you're dressing up for a
            night out or adding a pop of color to your everyday style, our red
            jacket ensures you stand out with sophistication and ease.
          </p>
          <h3>Why You Should Buy:</h3>
          <p>
            <ul>
              <li>
                - Eye-Catching Design: The vibrant red hue is perfect for making
                a bold fashion statement.
              </li>
              <li>
                - Versatile Style: Dress it up or down for any occasion, from
                casual outings to formal events.
              </li>
              <li>
                - Unmatched Comfort: Crafted from premium materials, ensuring
                you stay comfortable all day.
              </li>
              <li>
                - Timeless Elegance: A classic design that remains stylish
                season after season.
              </li>
              <li>
                - Impeccable Fit: Tailored to provide a flattering silhouette
                for all body types.
              </li>
              <li>
                - Durable Quality: High-quality construction guarantees
                long-lasting wear.
              </li>
            </ul>
          </p>
          <p>
            Don't miss out on this must-have fashion statement. Shop Now and
            Transform Your Wardrobe!
          </p>
        </div>
      </div>
    </div>
  );
};
