import React from "react";
import "./FooterAddition.css";

export const FooterAddition = () => {
  return (
    <div className="footeraddition">
      <div className="footeraddition-left">
        <p>Lagos, Nigeria</p>
        <p>Local Time - 7:00am</p>
      </div>
      <div className="footeraddition-right">
        <p>Terms and Services</p>
        <p>Privacy Policy</p>
        <p className="year">2024</p>
      </div>
    </div>
  );
};
