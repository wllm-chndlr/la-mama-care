import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import jc from '../../images/jc.jpg'
import nm from "../../images/nm.jpg";
import ac from "../../images/ac.jpg";
import "./About.css";


const About = () => (
  <Container fluid className="cont-a">

    <div id="about-main">

    <Tagline>About Us</Tagline>

    <Row>
      <Col size="md-8">
        <div className="p-a">
          <p className="p-header">Jacqueline Chandler</p>
          <br />
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
      <Col size="md-4">
        <img 
          src={jc}
          style={{ 
            width: "80%", 
            height: "80%",
            // margin: "5rem",
            borderRadius: "5px",
            // transform: "rotate(90deg)" 
          }}
        />
      </Col>
    </Row>

    <Row>
      <Col size="md-4">
        <img 
          src={ac}
          style={{ 
            width: "80%", 
            height: "80%",
            marginLeft: "6%",
            borderRadius: "5px"
          }}
        />
      </Col>
      <Col size="md-8">
        <div className="p-a">
          <p className="p-header">Anne Clary</p>
          <br />
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
    </Row>

    <Row>
      <Col size="md-8">
        <div className="p-a">
          <p className="p-header">Nique Mayo</p>
          <br />
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
      <Col size="md-4">
        <img 
          src={nm}
          style={{ 
            width: "80%", 
            height: "80%",
            // margin: "5rem",
            borderRadius: "5px"
          }}
        />
      </Col>
    </Row>

    </div>

  </Container>
);

export default About;
