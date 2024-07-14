import React from "react";
import "./NewsLetterMobile.css";
import arrow_icon from "../Assets/arrow_icon.svg";

export const NewsLetterMobile = () => {
  return (
    <div className="newslettermobile">
      <h3>Connect With Us</h3>
      <p>Fear Of Missing Out? Get the latest deals, updates and more</p>
      <div className="enter-newsletter">
        <input className="newletter-mobile" type="text" />
        <button className="newsletter-icon">
          <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};
