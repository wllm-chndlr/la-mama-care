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
import jc from "../../images/jc-halftone.jpg";
import nm from "../../images/nm-halftone.jpg";
import ac from "../../images/ac-halftone.jpg";
import packageImg from "../../images/package.jpeg";



const Home = () => (
  <Container fluid>
    <div id="home-main">
      {/* <Tagline>Not all heroes wear capes.</Tagline> */}
      <Row>
        <div style={{ backgroundColor: "rgb(0, 178, 169)" }}>
          {/* <Col size="md-3" /> */}
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
              {/* <RaisedButton
                label="View care kits"
                primary={false}
                style={{
                  margin: "12px",
                  backgroundColor: "rgb(182, 207, 208)"
                }}
                // style={{
                //   alignContent: "center",
                //   backgroundColor: "#444",
                //   marginTop: "15px",
                //   color: "#fff",
                //   borderRadius: "10px",
                //   padding: "10px 20px"
                // }}
                onClick={() => (window.location.href = "/boxes")}
              /> */}
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
              <div id="three-mamas-text">
                <p>
                  Started by three mamas who know firsthand how life-changing
                  the first few days, weeks, and months can be,{" "}
                  <text className="bang">La Mama Care</text> was conceived with
                  parents from all walks of life in mind.
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
              <div id="three-mamas-text">
                <p>
                  Whether it is a first time mom or one who already has little
                  ones at home, one who is breast or bottle feeding, is
                  recovering from a cesarean birth or rocked a home birth, she
                  is a superhero who deserves to feel nourished, supported, and
                  strengthened during the postpartum period.
                </p>
              </div>
            </Paper>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-5">
          <img src={packageImg} style={{ maxWidth: "100%" }} />
        </Col>

        <Col size="md-7">
          <p className="p-a">
            Our care kit is intended to provide moms with the sustenance and
            supplies they need to ensure their own self care during this
            critical time in their lives when time for themselves is limited.
          </p>
          <p className="p-a">
            Through handy, healthy snacks and other practical essentials, our
            kit is intended to surround the mother with must-have items and
            helpful information to help navigate the critical 4th trimester.
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-2" />

        <Col size="md-8">
          <div className="p-a">
            <p>
              Our hope is that every mom receives the love and support she
              deserves after embarking on one of life’s most exciting journeys.
              We hope to build not just a product, but a community that
              continues to grow and nurture each other through the years.
            </p>
          </div>
        </Col>

        <Col size="md-2" />
      </Row>

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