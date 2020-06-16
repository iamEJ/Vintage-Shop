import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center empty">
        The cart is empty...
      </h1>
      <div className="d-flex justify-content-center">
        <Link to="/products" className="btn cartbutton ">
          Add items
        </Link>
      </div>
    </div>
  );
}
