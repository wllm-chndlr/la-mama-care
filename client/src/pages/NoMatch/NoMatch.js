import React from "react";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import Tagline from "../../components/Tagline";


const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Tagline>
        404 Page Not Found<br/>
        Sorry!
        </Tagline>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
