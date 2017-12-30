import React from "react";
import { Col, Row, Container } from "../../components/Grid";


const Tagline = props => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div>
          <h1
            style={{
              fontFamily: "'Squada One', cursive",
              color: "rgb(0 125 138)",
              marginBottom: "5%",
              marginLeft: "3%"
            }}
          >
          {props.children}
          </h1>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Tagline;
