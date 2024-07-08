import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { CartIcon } from "../Icons/CartIcon";
import { LikeIcon } from "../Icons/LikeIcon";
import { BarIcon } from "../Icons/BarIcon";
import profile_picture from "../Assets/profilepicture.png";
import message_icon from "../Assets/messages.svg";

export const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navbar-flex-mobile">
        <div className="test">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <input
            className="searchproducts"
            type="text"
            placeholder="Search all products"
          />
          <div className="nav-icons">
            <Link to="/messages">
              <img src={message_icon} alt="" />
            </Link>
            <Link to="/likes">
              <LikeIcon />
            </Link>
            <Link to="/cart" className="cart-icon-container">
              <CartIcon />
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </Link>
            <div className="bar-icon">
              <BarIcon />
            </div>

            <div className="profile-container">
              <img
                className="profile-picture"
                src={profile_picture}
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <div className="search-mobile">
          <input
            className="searchproducts-mobile"
            type="text"
            placeholder="Search all products"
          />
        </div>
      </div>
    </div>
  );
};
