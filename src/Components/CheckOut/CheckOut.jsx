import React from "react";
import "./CheckOut.css";
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="checkout">
      <h2>Payment</h2>
      <div className="payment-method">
        <p>Payment options</p>
      </div>
      <div className="card-details">
        <p>Card Number</p>
        <input type="text" placeholder="1234 5678 9101 1213" />
        <div className="expiration-cvv">
          <div>
            <p>Expiration Date</p>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div>
            <p>CVV</p>
            <input type="text" placeholder="***" />
          </div>
        </div>
        <div className="save-card">
          <input type="checkbox" />
          <label>Save card details</label>
        </div>
      </div>
      <button onClick={handleGoHome}>Continue</button>
      <p>
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </p>
    </div>
  );
};
