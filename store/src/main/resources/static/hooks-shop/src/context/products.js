import React from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts, paginate } from "../utils/Helpers";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  //extra state values
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filters, setFilters] = React.useState({
    search: "",
    category: "all",
    onSale: false,
    price: "all",
  });

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featured = featuredProducts(response.data);
      setSorted(paginate(response.data));
      setProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  const changePage = (index) => {
    setPage(index);
  };

  const updateFilters = (e) => {
    console.log(e);
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        featured,
        sorted,
        page,
        filters,
        changePage,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
