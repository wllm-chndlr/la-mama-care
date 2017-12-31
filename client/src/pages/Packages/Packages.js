import React from "react";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import Tagline from "../../components/Tagline";
import CardExample from "../../components/Card";


const Packages = () => (
  <Container fluid>
    <Tagline>Packages</Tagline>
    <Row>
      <Col size="md-1" />
      <Col size="md-2">
        <CardExample />
      </Col>
      <Col size="md-2">
        <CardExample />
      </Col>
      <Col size="md-2">
        <CardExample />
      </Col>
      <Col size="md-2">
        <CardExample />
      </Col>
      <Col size="md-2">
        <CardExample />
      </Col>
      <Col size="md-1" />
    </Row>
  </Container>
);

export default Packages;
