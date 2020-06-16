import React from "react";
import { CartContext } from "../context/Cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
//import { UserContext } from "../context/User";
import { Card } from "react-bootstrap";

export default function Cart() {
  let user = false;
  const { cart, total } = React.useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="container d-flex justify-content-center mb-5">
      <Card className="section">
        <h2 className="yourCart">Your cart:</h2>
        <hr style={{ width: "666px" }} />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <h2>Total: {total}$</h2>
        {user ? (
          <Link to="/checkout" className="btn cartbutton">
            Check out
          </Link>
        ) : (
          <Link to="/login" className="btn cartbutton">
            Login
          </Link>
        )}
      </Card>
    </div>
  );
}
