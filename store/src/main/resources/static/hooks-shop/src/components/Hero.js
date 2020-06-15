import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export default function Hero({ children }) {
  return (
    <div className="banner text-white">
      <Container fluid>
        <Row>
          <Col className="bannertext">
            <h1>Hello, world!</h1>
            <p className="mt-3 mb-5 ">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.This is
              a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>{children}</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
