import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Paper from "../../components/Paper";
import Tagline from "../../components/Tagline";
import "./Home.css";

const Home = () => (
  <Container fluid>
    {/* <Tagline>Not all heroes wear capes.</Tagline> */}
    <Row>
      <Col size="md-6">
        {/* <h1 style={{ color: "rgb(90, 90, 90)" }}> */}
        <h1>Not all heroes wear capes.</h1>
        {/* <h3 style={{ color: "rgb(90, 90, 90)" }}> */}
        <h3>
          Focused on a mother’s holistic wellbeing immediately following
          childbirth, our postpartum care kits provide moms with must-have
          self-care items for this critical time.
        </h3>
      </Col>
      <Col size="md-6">
        <img
          src="https://www.littlebigcrafter.com/wp-content/uploads/2016/04/Super-Mom-Download-Design-Freebie-1.jpg"
          alt="supermom"
          style={{
            width: "100%",
            opacity: "0.8",
            paddingleft: "0px",
            paddingright: "0px",
            margin: "auto"
          }}
        />
        <div />
      </Col>
    </Row>
  </Container>
);

export default Home;
