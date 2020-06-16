import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
//import { CardContext } from "../context/Card";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { photoUrl, title, description, price } = product;
    return (
      <div>
        <Container>
          <Row className="mt-5">
            <Col>
              <div className="d-flex justify-content-center mt-5 mb-5">
                <img
                  src={photoUrl}
                  alt={title}
                  className="img-fluid productImage "
                />
              </div>
            </Col>
            <Col>
              <h1>{title}</h1>
              <h3 className="mt-2 mb-5 price">{price} $</h3>
              <p>{description}</p>
              <button
                className="btn addtocard btn-block"
                onClick={() => {
                  //add to cart
                  history.push("/cart");
                }}
              >
                Add to the cart
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
