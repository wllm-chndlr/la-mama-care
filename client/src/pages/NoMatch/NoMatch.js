import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h3>404 Page Not Found</h3>
          <h3>
            <span role="img" aria-label="sorry">
              Sorry!
            </span>
          </h3>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default NoMatch;
