import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartLink from "./Cart/CartLink";

export default function Header() {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Link className="logo" to="/">
        <span>Vin</span>
        <span style={{ color: "#e00d0d" }}>Shop</span>
      </Link>
      <Nav className="mr-auto">
        <Link className="navButton" to="/">
          Home
        </Link>
        <Link className="navButton" to="/about">
          About
        </Link>
        <Link className="navButton" to="/products">
          Products
        </Link>
      </Nav>
      <Nav className="d-flex justify-content-end mr-4">
        <Link className="navButton" to="/login">
          <FontAwesomeIcon icon={faSignInAlt} />
        </Link>

        <CartLink />
      </Nav>
    </Navbar>
  );
}
