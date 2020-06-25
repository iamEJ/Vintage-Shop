import React from "react";
import Product from "./Product";

export default function ProductList({ title, products }) {
  return (
    <div className="container mb-5">
      <h1 className="d-flex justify-content-center mt-5">{title}</h1>
      <div className="d-flex flex-wrap justify-content-center mr-2">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
