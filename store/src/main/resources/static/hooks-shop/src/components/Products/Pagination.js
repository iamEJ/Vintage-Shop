import React from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination() {
  const { sorted, page, changePage } = React.useContext(ProductContext);
  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />
        {sorted.length > 1 && (
          <div className="pageBtn d-flex justify-content-center mt-4 mb-5">
            {page > 0 && (
              <button className="btnPrev" onClick={() => changePage(page - 1)}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `pageBtnCurrent`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < sorted.length - 1 && (
              <button className="btnNext" onClick={() => changePage(page + 1)}>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            )}
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="container">
        <h3 className="d-flex justify-content-center">
          There are no products to display
        </h3>
      </div>
    );
  }
}
