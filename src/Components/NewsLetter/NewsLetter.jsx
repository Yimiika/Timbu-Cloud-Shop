import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>Fear Of Missing Out?</h3>
          <p>Get the latest deals, updates and more</p>
        </div>
        <div className="newsletter-right">
          <div className="newsletter-input">
            <input type="email" placeholder="Your Email address" />
          </div>
          <div className="newsletter-button">
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
