import React from "react";
import "./PaymentPopup.css";

export const PaymentPopup = ({ closePopUp }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Payment</h2>
        <hr />
        <div className="payment-method">
          <p>Pay With:</p>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment-option"
                value="transfer"
                defaultChecked
              />{" "}
              Card
            </label>
            <label>
              <input type="radio" name="payment-option" value="card" /> Bank
            </label>
            <label>
              <input type="radio" name="payment-option" value="bankTransfer" />{" "}
              Transfer
            </label>
          </div>
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
        <button onClick={closePopUp}>Continue</button>
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
    </div>
  );
};
