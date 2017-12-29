import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const About = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>About</Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default About;
