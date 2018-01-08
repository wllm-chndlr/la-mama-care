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
      <div id="teal-top" style={{ backgroundColor: "rgb(0, 178, 169)" }}>
        {/* <Col size="md-3" /> */}
        <Col size="md-12">
          <div id="top">
            <h1>Even superheroes need support.</h1>
            <h3
              style={{
                width: "50%",
                fontFamily: "'Oswald', cursive"
              }}
            >
              Focused on a mother’s holistic wellbeing immediately following
              childbirth, our postpartum care kits provide moms with must-have
              self-care items for this critical time.
            </h3>
            <button
              style={{
                alignContent: "center",
                backgroundColor: "#444",
                marginTop: "15px",
                color: "#fff",
                borderRadius: "10px",
                padding: "10px 20px"
              }}
            >
              View care kits
            </button>
          </div>
        </Col>
        {/* <Col size="md-3" /> */}
      </div>
    </Row>

    <Row>
      <Col size="md-12">
        <div className="p-a">
          La Mama Care is focused on a mother’s holistic wellbeing immediately
          following childbirth. Started by three mamas who know firsthand how
          life-changing the first few days, weeks, and months can be, La Mama
          Care was conceived with parents from all walks of life in mind.
          Whether it is a first time mom or one who already has little ones at
          home, one who is breast or bottle feeding, is recovering from a
          cesarean birth or rocked a home birth, she is a superhero who deserves
          to feel nourished, supported, and strengthened during the postpartum
          period.
        </div>
      </Col>
      {/* <Col size="md-4" /> */}
    </Row>

    <Row>
      <Col size="md-3" />
      <Col size="md-6">
        <div />
      </Col>
      <Col size="md-3" />
    </Row>
  </Container>
);

export default Home;



      {
        /* <Col size="md-6">
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
      </Col> */
      }