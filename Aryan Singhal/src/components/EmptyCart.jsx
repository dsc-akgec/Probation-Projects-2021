import React from "react";
import "./EmptyCart.css";
import { Link } from "react-router-dom";
function EmptyCart(empty) {
  return (
    <div className="emptyCart">
      <h3 className="cartEmpty">{empty.message}</h3>
      <Link to="/homepage">
        <button className="emptyButton">Continue Shopping</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
