import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import mom1 from "../../images/mom1.jpeg";
import mom2 from "../../images/mom2-halftone.jpg";
import ModalModalExample from "../../components/Modal";
import Paper from "../../components/Paper";
import "./Home.css";
import jc from "../../images/jc-new.jpg";
import nm from "../../images/nm-new.jpg";
import ac from "../../images/ac-new.jpg";
import packageImg from "../../images/package.jpeg";



const Home = () => (
  <Container fluid>
    <div id="home-main">
      <Row>
        <div style={{ backgroundColor: "rgb(0, 178, 169)" }}>
          <Col size="md-12">
            <div id="top">
              <span>
                <div
                  id="header"
                  style={{ fontFamily: "'Bangers', sans-serif", lineHeight: 1 }}
                >
                  Even
                  <p
                    id="super"
                    className="animated zoomInLeft"
                    style={{
                      fontFamily: "'Bangers', sans-serif",
                      lineHeight: 1,
                      paddingTop: "5px"
                    }}
                  >
                    superheroes
                  </p>{" "}
                  need support
                </div>
              </span>
              <h3
                style={{
                  maxWidth: "50%",
                  fontFamily: "'Poppins'",
                  margin: "auto"
                }}
              >
                Focused on a mother’s holistic wellbeing immediately following
                childbirth, our postpartum care kit provides moms with must-have
                self-care items for this critical time.
              </h3>

              {/* <ModalModalExample/> */}
            </div>
          </Col>
          {/* <Col size="md-3" /> */}
        </div>
      </Row>

      {/* <Row>
        <Col size="md-12">
          <img src={mom2} style={{ maxWidth: "100%" }} />
        </Col>
      </Row> */}

      <Row>
        <Col size="md-12">
          <div className="p-a" id="three-mamas">
            <Paper>
              <div id="about-main-div">
                <div id="three-mamas-text">
                  <p>
                    Started by three mamas who know firsthand how life-changing
                    the first few days, weeks, and months can be,{" "}
                    <span className="bang">La Mama Care</span> was conceived
                    with parents from all walks of life in mind.
                  </p>
                </div>
                <Row>
                  <Col size="md-3" />
                  <Col size="md-6">
                    <div id="home-headshots">
                      <img
                        style={{ maxWidth: "32%", marginRight: "2%" }}
                        className="home-headshot"
                        src={jc}
                        alt="jacqueline chandler"
                      />
                      <img
                        style={{ maxWidth: "32%", marginRight: "2%" }}
                        className="home-headshot"
                        src={ac}
                        alt="anne clary"
                      />
                      <img
                        style={{ maxWidth: "32%" }}
                        className="home-headshot"
                        src={nm}
                        alt="nique mayo"
                      />
                    </div>
                  </Col>
                  <Col size="md-3" />
                </Row>
              </div>
            </Paper>
          </div>
        </Col>
      </Row>

      <div className="superhero-div">
        <Row>
          <Col size="md-12">
            <div className="superhero-div">
              <p id="sup-top" className="superhero-p">
                Whether she is
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-4">
            <div className="superhero-div">
              <p className="superhero-p">
                a first-time mom <br />or <br />one with little ones at home
              </p>
            </div>
          </Col>
          <Col size="md-4">
            <div className="superhero-div">
              <p className="superhero-p">
                recovering from a cesarean birth <br />or <br />rocked a home
                birth
              </p>
            </div>
          </Col>
          <Col size="md-4">
            <div className="superhero-div">
              <p className="superhero-p">
                breast feeding <br />or <br />bottle feeding
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div className="superhero-div">
              <p className="superhero-p">
                she is a <span className="bang">superhero</span> who deserves to
                feel <br />nourished, <br />supported, <br />and strengthened{" "}
                <br />during the postpartum period.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col size="md-4">
          <img
            src={packageImg}
            style={{
              maxWidth: "100%",
              minHeight: "30rem",
              borderTop: "3px solid rgb(54, 54, 54)",
              borderBottom: "3px solid rgb(54, 54, 54)",
              borderRight: "3px solid rgb(54, 54, 54)"
              // borderLeft: "3px solid rgb(54, 54, 54)"
            }}
          />
        </Col>

        <Col size="md-8">
          <div style={{ minHeight: "30rem" }}>
            <p className="p-a" id="item2">
              Our care kit is intended to provide moms with the sustenance and
              supplies they need to ensure their own self care during this
              critical time in their lives when time for themselves is limited.
              <br />
              Through handy, healthy snacks and other practical essentials, our
              kit is intended to surround the mother with must-have items and
              helpful information to help navigate the critical 4th trimester.
            </p>

            <RaisedButton
              label="View care kit"
              primary={true}
              style={{
                margin: "1rem",
                backgroundColor: "rgb(182, 207, 208)"
              }}
              onClick={() => (window.location.href = "/kit")}
            />
            
          </div>
        </Col>
      </Row>

      <div id="end">
        <Row>
          <Col size="md-3" />

          <Col size="md-6">
            <Paper>
              <div className="p-a">
                <p>
                  Our hope is that every mom receives the love and support she
                  deserves after embarking on one of life’s most exciting
                  journeys.
                </p>
                <p>
                  We hope to build not just a product, but a community that
                  continues to grow and nurture each other through the years.
                </p>
              </div>
            </Paper>
          </Col>

          <Col size="md-3" />
        </Row>
      </div>

      {/* <Row>
        <Col size="md-2" />

        <Col size="md-8">
          <div className="p-a">So, what's included in a La Mama Care kit?</div>
        </Col>

        <Col size="md-2" />
      </Row>

      <Row>
        <div id="included-div">
          <Col size="md-3">
            <div className="included" id="item1">
              A <text className="bang">WATER BOTTLE</text> with important
              hydration guidelines for the postpartum period.
            </div>
          </Col>
          <Col size="md-3">
            <div className="included" id="item2">
              Nutritious and handy <text className="bang">SNACKS</text> to
              satisfy when time is limited.
            </div>
          </Col>
          <Col size="md-3">
            <div className="included" id="item3">
              <text className="bang">PERSONAL CARE ITEMS</text> to aid the
              postpartum body in recuperating from the major changes that have
              just taken place.
            </div>
          </Col>
          <Col size="md-3">
            <div className="included" id="item4">
              Most importantly, a <text className="bang">RESOURCE BOOK</text>{" "}
              that walks the mom through the best ways to take care of herself
              both physically and emotionally over the next year.
            </div>
          </Col>
        </div>
      </Row> */}
    </div>
  </Container>
);

export default Home;