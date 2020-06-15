import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product({ photoUrl, title, id, price }) {
  return (
    <div className="cardContainer">
      <Card style={{ width: "18rem", margin: "5px", height: "400px" }}>
        <div className="productCard">
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              {title}
            </Card.Title>
            <Card.Text style={{ height: "275px" }}>
              <img className="img-fluid" src={photoUrl} alt={title} />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>The price: {price}$</div>
          </Card.Footer>
        </div>

        <div className="productButton">
          <Link to={`products/${id}`} className="text text-white">
            More
          </Link>
        </div>
      </Card>
    </div>
  );
}
