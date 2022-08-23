import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="cart-count">
      <Link to="/cart">
        <i className="fa fa-shopping-cart">
          <span className="cart-items-count">
            {/* {itemCount >= 1 ? itemCount : ""} */}
          </span>
        </i>
      </Link>
    </div>
  );
}

export default CartWidget;