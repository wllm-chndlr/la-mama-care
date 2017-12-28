import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Paper from "../../components/Paper";
import Tagline from "../../components/Tagline";

const Home = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <img
          src="https://www.fitfamsupps.com/wp-content/uploads/2017/03/mom-with-baby.jpeg"
          style={{
            width: "100%",
            opacity: "0.7",
            paddingleft: "0",
            paddingright: "0"
          }}
        />
      </Col>
    </Row>
    <Tagline />
  </Container>
);

export default Home;
