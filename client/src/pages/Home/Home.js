import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import mom1 from "../../images/mom1.jpeg";
import mom2 from "../../images/mom2.jpeg";
import ModalModalExample from "../../components/Modal";
import "./Home.css";


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
                <div id="header">
                  Even{" "}
                  <p id="super" className="animated zoomInLeft">
                    superheroes
                  </p>{" "}
                  need support.
                </div>
              </span>
              <br />
              <h3
                style={{
                  maxWidth: "50%",
                  fontFamily: "'Oswald', cursive",
                  margin: "auto"
                }}
              >
                Focused on a mother’s holistic wellbeing immediately following
                childbirth, our postpartum care kits provide moms with must-have
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
            <div id="three-mamas-text">
              <p>
                Started by three mamas who know firsthand how life-changing the
                first few days, weeks, and months can be, La Mama Care was
                conceived with parents from all walks of life in mind.
              </p>

              <p>
                Whether it is a first time mom or one who already has little
                ones at home, one who is breast or bottle feeding, is recovering
                from a cesarean birth or rocked a home birth, she is a superhero
                who deserves to feel nourished, supported, and strengthened
                during the postpartum period.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* <Row>
        <Col size="md-12">
          <div className="p-a" id="facts">
            <p className="p-header">The facts</p>
            <br />
            Each year in the United States:
            <br />
            <ul>
              <li>
                11 to 20% of women who give birth have postpartum depression
                symptoms, yet only 15% of women with postpartum depression ever
                receive professional treatment.
              </li>
              <br />
              <li>More than 600 women die of pregnancy-related causes.</li>
              <br />

              <li>65,000 women will have severe pregnancy complications.</li>
              <br />

              <li>
                <p id="cdc">Source: Centers for Disease Control</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row> */}

      {/* <Row>
        <Col size="md-12">
          <div className="p-a">
            <p>Bottom line:</p>
            <p>
              Mamas still need quite a bit of care after giving birth, but too
              often, the mama’s needs get put on the backburner while focusing
              on their newest addition.
            </p>
          </div>
        </Col>
      </Row> */}

      <Row>
        <Col size="md-2" />

        <Col size="md-8">
          <div className="p-a">
            Our care kits are intended to provide moms with the sustenance and
            supplies they need to ensure their own self care during this
            critical time in their lives when time for themselves is limited.
            Through handy, healthy snacks and other practical essentials, our
            kits are intended to surround the mother with must-have items and
            helpful information to help navigate the critical 4th trimester.
          </div>
        </Col>

        <Col size="md-2" />
      </Row>

      <Row>
        <Col size="md-2" />

        <Col size="md-8">
          <div className="p-a">So, what's included in a La Mama Care kit?</div>
        </Col>

        <Col size="md-2" />
      </Row>

      <Row>
        <Col size="md-2" />

        <Col size="md-8">
          <div id="included">
            <p>
              A La Mama Care WATER BOTTLE with important hydration guidelines
              for the postpartum period.
            </p>
            <p>
              Nutritious and handy SNACKS to satisfy when time is limited.
            </p>
            <p>
              PERSONAL CARE ITEMS to aid the postpartum body in recuperating
              from the major changes that have just taken place.
            </p>
            <p>
              Most importantly, a RESOURCE BOOK that walks the mom through the
              best ways to take care of herself both physically and emotionally
              over the next year.
            </p>
          </div>
        </Col>

        <Col size="md-2" />
      </Row>

      <Row>
        <Col size="md-2" />

        <Col size="md-8">
          <div className="p-a">
            Our hope is that every mom receives the love and support she
            deserves after embarking on one of life’s most exciting journeys. We
            hope to build not just a product, but a community that continues to
            grow and nurture each other through the years.
          </div>
        </Col>

        <Col size="md-2" />
      </Row>
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