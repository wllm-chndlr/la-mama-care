import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import jc from '../../images/jc-new2.jpg'
import nm from "../../images/nm-new2.jpg";
import ac from "../../images/ac-new2.jpg";
import "./About.css";
import Paper from "../../components/Paper";



const About = () => (
  <Container fluid className="cont-a">
    <div id="about-main">
      <Tagline style={{ color: "#fff" }}>About Us</Tagline>

      <Row>
        <Col size="md-2" />
        <Col size="md-8">
          <p
            style={{
              fontSize: "2rem",
              marginBottom: "4rem",
              padding: "0 3% 0 3%"
            }}
          >
            Started by three mamas who know firsthand how life-changing the
            first few days, weeks, and months can be, La Mama Care was conceived
            with parents from all walks of life in mind.
          </p>
        </Col>
        <Col size="md-2" />
      </Row>

      <div className="individual">
        <Row>
          <Col size="md-1" />

          <Col size="md-6">
            <Paper>
              <div className="p-bio">
                <p className="p-header">Jacqueline Chandler</p>
                Jacqueline is a birth and postpartum doula in Austin, Texas. Her
                parenting journey began 4 years ago with the birth of her smart,
                funny son Lochlan. She has a special place in her heart for NICU
                parents as her daughter, who was born in January 2018, spent 10
                days in intensive care after she decided to make an arrival at
                34 weeks gestation. When not nerding out on all things birth and
                parenting, you will find Jacqueline eating tacos and playing out
                in the yard with her sweet family.
              </div>
            </Paper>
          </Col>

          <Col size="md-4">
            <Paper>
              <img className="headshot" src={jc} alt="jacqueline chandler" />
            </Paper>
          </Col>

          <Col size="md-1" />
        </Row>
      </div>

      <div className="individual">
        <Row>
          <Col size="md-1" />
          <Col size="md-4">
            <Paper>
              <img className="headshot" src={ac} alt="anne clary" />
            </Paper>
          </Col>
          <Col size="md-6">
            <Paper>
              <div className="p-bio">
                <p className="p-header">Anne Clary</p>
                Anne is the mama of twins James and Rosie living in Austin,
                Texas. While parenting twins with her husband is simultaneously
                fun and exhausting, Anne is fortunate to have lots of help from
                her parents and sister who live nearby. This support network has
                been crucial for everyone's sanity (and sleep!) and is something
                Anne hopes to recreate through La Mama Care's services. When not
                working full-time or changing diapers, you can find Anne having
                a glass of wine...or two.
              </div>
            </Paper>
          </Col>
          <Col size="md-1" />
        </Row>
      </div>

      <div className="individual">
        <Row>
          <Col size="md-1" />

          <Col size="md-6">
            <Paper>
              <div className="p-bio">
                <p className="p-header">Nique Mayo</p>
                Nique is mama to three-year-old Annabelle and baby Anderson.
                Along with her husband and pup Lucy, Nique and the kids live
                “just west of weird” in Dripping Springs, TX. While struggling
                with nursing issues and perinatal and postpartum anxiety/OCD,
                Nique was lucky to have an incredible support system in her
                friends, family and healthcare providers. She believes every mom
                deserves holistic support, regardless of race, orientation or
                income level. When Nique powers down from her full-time
                consulting job, she enjoys neighborhood walks with Lucy and
                pre-bedtime dance parties with her family.
              </div>
            </Paper>
          </Col>
          <Col size="md-4">
            <Paper>
              <img className="headshot" src={nm} alt="nique mayo" />
            </Paper>
          </Col>
          <Col size="md-1" />
        </Row>
      </div>
    </div>
  </Container>
);

export default About;
