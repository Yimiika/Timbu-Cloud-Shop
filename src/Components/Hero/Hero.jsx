import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

export const Hero = ({ scrollToProducts }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>Stand Out In</h2>
          <h2>Bold Red Jacket</h2>
          <div>
            <p>Elevate Your Style with Our Bold Red Jacket</p>
          </div>
          <div className="hero-latest-btn">
            <button className="hero-button" onClick={scrollToProducts}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="hero-mobile">
        <div className="hero-mobile-image">
          <img src={hero_image} alt="" />
        </div>
        <div className="hero-left">
          <h2>Stand Out In</h2>
          <h2>Bold Red Jacket</h2>
          <div>
            <p>Elevate Your Style with Our Bold Red Jacket</p>
          </div>
          <div className="hero-latest-btn">
            <button className="hero-button" onClick={scrollToProducts}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
