import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import star_icon from "../Assets/solid_star.svg";
import star_dull_icon from "../Assets/clear_star.svg";

export const Item = (props) => {
  const discount =
    props.discount !== undefined ? Math.round(props.discount) : 0;
  const { id, name, image, location, new_price, old_price } = props;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <div className="item-image">
          <img onClick={() => window.scrollTo(0, 0)} src={image} alt={name} />
        </div>
      </Link>
      <p className="item-name">{name}</p>
      <p className="item-location">{location}</p>
      <div className="productdisplay-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
      </div>
      <div className="item-prices">
        <div className="item-price-new">N{new_price}</div>
        <div className="item-price-old">N{old_price}</div>
        {discount !== 0 && <div className="discount-rate">{discount}%</div>}
      </div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};
