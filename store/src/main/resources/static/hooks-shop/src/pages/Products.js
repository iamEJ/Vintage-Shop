import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
import Filtered from "../components/Products/Filtered";
import Pagination from "../components/Products/Pagination";

export default function Products() {
  const { loading, sorted } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Filtered />
        <Pagination />
      </>
    );
  }
}
