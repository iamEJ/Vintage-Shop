import React from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";

export default function Pagination() {
  const { sorted, page, changePage } = React.useContext(ProductContext);
  return <ProductList products={sorted} />;
}
