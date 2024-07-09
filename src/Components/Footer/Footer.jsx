import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-address">
        <h5 className="heading">Get to Us</h5>
        <p>Visit us at Shop F19/23, Road 3, Ikota</p>
        <p>Shopping Complex, VGC, Lekki-Epe</p>
        <p>Expressway, Lagos, Nigeria</p>
        <p>+234 (0) 9064945445</p>
      </div>
      <div className="footer-content">
        <div className="footer-shops">
          <ul>
            <li className="heading">Shop</li>
            <li>Real Estate</li>
            <li>Furniture</li>
            <li>Decor</li>
            <li>Bedding</li>
            <li>Outdoor</li>
          </ul>
        </div>
        <div className="footer-brands">
          <ul>
            <li className="heading">Popular Brands</li>
            <li>Ikea</li>
            <li>Ashley Furniture</li>
            <li>Crate & Bard</li>
            <li>Pottery Barn</li>
            <li>Havens</li>
            <li>Basset Furniture</li>
          </ul>
        </div>
        <div className="footer-company">
          <ul>
            <li className="heading">Company</li>
            <li>About</li>
            <li>Our community</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li className="heading">Social</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
