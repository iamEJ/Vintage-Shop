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
    shipping: false,
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

  React.useEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, category, shipping, price } = filters;

    if (category !== "all") {
      newProducts = newProducts.filter((item) => item.category === category);
    }

    if (shipping !== false) {
      newProducts = newProducts.filter(
        (item) => item.freeShipping === shipping
      );
    }

    if (search !== "") {
      newProducts = newProducts.filter((item) => {
        let title = item.title.toLowerCase().trim();
        return title.includes(search) ? item : null;
      });
    }

    if (price !== "all") {
      newProducts = newProducts.filter((item) => {
        if (price === 0) {
          return item.price < 500;
        } else if (price === 500) {
          return item.price >= 500 && item.price < 1000;
        } else {
          return item.price >= 1000;
        }
      });
    }

    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  const changePage = (index) => {
    setPage(index);
  };

  const updateFilters = (e) => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
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
