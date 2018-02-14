import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import "./NoMatch.css";



const NoMatch = () => (
  <Container fluid>
    <div id="nomatch-main">
      <Row>
        <Col size="md-12">
          <Tagline>404 Page Not Found</Tagline>
          <Tagline>Sorry!</Tagline>
        </Col>
      </Row>
    </div>
  </Container>
);

export default NoMatch;
