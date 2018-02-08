import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import FlatButton from "material-ui/FlatButton";
import Paper from "../../components/Paper";
import "./Home.css";
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
                  maxWidth: "70%",
                  fontFamily: "'Poppins'",
                  margin: "auto"
                }}
              >
                Focused on a mother’s holistic wellbeing immediately following
                childbirth, our postpartum care kit provides moms with must-have
                self-care items for this critical time.
              </h3>
            </div>
          </Col>
          {/* <Col size="md-3" /> */}
        </div>
      </Row>

      <Row>
        <Col size="md-12">
          <div id="sup-main">
            <Paper>
              <div className="superhero-div">
                <Row>
                  <Col size="md-1" />

                  <Col size="md-11">
                    <p className="superhero-p" style={{ paddingTop: "3%" }}>
                      Whether she is
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col size="md-2" />
                  <Col size="md-10">
                    <div
                      className="super-anim"
                      data-aos="fade-up"
                      data-aos-offset={200}
                      data-aos-once={true}
                    >
                      <p className="superhero-p">
                        <span className="bang2">a first-time mom</span> or{" "}
                        <span className="bang2">
                          a mom with little ones at home
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col size="md-3" />
                  <Col size="md-9">
                    <div
                      className="super-anim"
                      data-aos="fade-up"
                      data-aos-offset={300}
                      data-aos-once={true}
                    >
                      <p className="superhero-p">
                        <span className="bang2">breast feeding</span> or{" "}
                        <span className="bang2">bottle feeding</span>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col size="md-4" />
                  <Col size="md-8">
                    <div
                      className="super-anim"
                      data-aos="fade-up"
                      data-aos-offset={400}
                      data-aos-once={true}
                    >
                      <p className="superhero-p">
                        <span className="bang2">
                          recovering from a cesarean birth
                        </span>{" "}
                        or <span className="bang2">rocked a home birth</span>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col size="md-11">
                    <div className="superhero-div">
                      <p
                        className="superhero-p"
                        style={{ textAlign: "right", paddingBottom: "3%" }}
                      >
                        she is a <span className="bang2">superhero</span> who
                        deserves to feel <br />nourished, <br />supported,{" "}
                        <br />and strengthened <br />during the postpartum
                        period.
                      </p>
                    </div>
                  </Col>
                  <Col size="md-1" />
                </Row>
              </div>
            </Paper>
          </div>
        </Col>
      </Row>

      <div id="kit-div">
        <Row>
          <Col size="md-4">
            <img
              src={packageImg}
              alt="care kit"
              onClick={() => (window.location.href = "/kit")}
              data-aos={"zoom-in"}
              data-aos-offset={500}
              data-aos-once={true}
              style={{
                maxWidth: "100%",
                margin: "5%",
                cursor: "pointer"
                // maxHeight: "80%"
                // borderTop: "3px solid rgb(54, 54, 54)",
                // borderBottom: "3px solid rgb(54, 54, 54)",
                // borderRight: "3px solid rgb(54, 54, 54)"
              }}
            />
          </Col>

          <Col size="md-8">
            <Row>
              <Col size="md-12">
                <div>
                  <p className="kit-p">
                    Our care kit is intended to provide moms with the sustenance
                    and supplies they need to ensure their own self care during
                    this critical time in their lives when time for themselves
                    is limited.
                  </p>

                  <FlatButton
                    label="View care kit"
                    primary={true}
                    style={{
                      marginLeft: "5%"
                    }}
                    backgroundColor="rgb(0, 178, 169)"
                    hoverColor="rgb(0, 125, 138)"
                    rippleColor="#fff"
                    labelStyle={{ color: "#fff", paddingBottom: "5%" }}
                    onClick={() => (window.location.href = "/kit")}
                  />
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col size="md-12" />
            </Row> */}
          </Col>
        </Row>
      </div>
    </div>
  </Container>
);

export default Home;