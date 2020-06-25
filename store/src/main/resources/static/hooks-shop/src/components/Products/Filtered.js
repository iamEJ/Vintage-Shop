import React from "react";
import { ProductContext } from "../../context/products";
import { Row, Col } from "react-bootstrap";

export default function Filtered() {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = React.useContext(ProductContext);
  return (
    <div className="container">
      <Row className="d-flex justify-content-center mt-4 mb-2">
        <h2>Search for products</h2>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-middle">
          <form>
            <div>
              <input
                className="inputStyle mainLoginInput mt-2"
                placeholder="&#xf002; search"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={updateFilters}
              ></input>
            </div>
          </form>
        </Col>
        <Col>
          <form>
            <div className="">
              <label htmlFor="category" className="mr-2">
                Category:
              </label>
              <br />
              <select
                className="form-group"
                name="category"
                id="category"
                value={category}
                onChange={updateFilters}
              >
                <option value="all">All</option>
                <option value="MUSIC_BOX">Music box</option>
                <option value="PHONE">Phone</option>
                <option value="CAMERA">Camera</option>
                <option value="BINOCULAR">Binoculars</option>
                <option value="COMPUTER">Computer</option>
                <option value="WATCH">Watch</option>
                <option value="GRAMOPHONE">Gramophone</option>
                <option value="COMPASS">Compass</option>
              </select>
            </div>
          </form>
        </Col>
        <Col>
          <form>
            <div>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={shipping}
                onChange={updateFilters}
                className="mr-2 mt-4"
              ></input>
              <label htmlFor="shipping">Free shipping</label>
            </div>
          </form>
        </Col>
        <Col>
          <form>
            <div>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="all"
                  checked={price === "all"}
                  onChange={updateFilters}
                  className="mr-2"
                ></input>
                All
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="price"
                  value="0"
                  checked={price === 0}
                  onChange={updateFilters}
                  className="mr-2"
                ></input>
                0$ - 499$
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="price"
                  value="500"
                  checked={price === 500}
                  onChange={updateFilters}
                  className="mr-2"
                ></input>
                500$ - 999$
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="price"
                  value="1000"
                  checked={price === 1000}
                  onChange={updateFilters}
                  className="mr-2"
                ></input>
                1000$ or more
              </label>
            </div>
          </form>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <h2>Total products: {sorted.flat().length}</h2>
      </Row>
      <hr />
    </div>
  );
}
