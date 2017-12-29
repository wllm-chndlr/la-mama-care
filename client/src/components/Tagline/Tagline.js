import React from "react";
import { Col, Row, Container } from "../../components/Grid";


const Tagline = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div>
          <h1
            style={{
              fontFamily: "'Bangers', cursive",
              color: "rgb(0 125 138)",
              marginBottom: "5%"
            }}
          >
            You've got this, superhero.
          </h1>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Tagline;
