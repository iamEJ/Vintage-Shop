import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero>
        <Link to="/products" className="homeButton">
          Our Products
        </Link>
      </Hero>
    </div>
  );
}
