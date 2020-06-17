import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cart";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);
  return (
    <>
      <Link className="navButton" to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <span className="cartBadge">{cartItems}</span>
    </>
  );
}
