import React from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../context/Cart";
import { Col, Row } from "react-bootstrap";

export default function CartItem({ id, image, title, price, amount }) {
  //card context
  const { removeItem } = React.useContext(CartContext);
  return (
    <div className="container">
      <Row>
        <Col className="d-flex justify-content-center ml-5 ">
          <img src={image} alt={title} className="cartImg" />
        </Col>
        <Col xs={6}>
          <h4>{title}</h4>
          <h5>{price}$</h5>
          <button
            className="btn removeBtn"
            onClick={() => {
              removeItem(id);
            }}
          >
            remove
          </button>
        </Col>
        <Col>
          <div>
            <button
              className="btn p-0 mt-3"
              onClick={() => {
                console.log("amount increased");
              }}
            >
              <FontAwesomeIcon icon={faAngleUp} className="arrow" />
            </button>
            <p className="amount">{amount}</p>
            <button
              className="btn p-0 m-0"
              onClick={() => {
                console.log("amount decreased");
              }}
            >
              <FontAwesomeIcon icon={faAngleDown} className="arrow" />
            </button>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
}
