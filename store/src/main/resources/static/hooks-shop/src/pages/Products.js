import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, sorted } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  } else {
    return <ProductList title="Our products" products={sorted} />;
  }
}
