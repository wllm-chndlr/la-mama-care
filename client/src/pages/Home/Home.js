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
                maxWidth: "50%",
                fontFamily: "'Oswald', cursive",
                margin: "auto"
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
              onClick={() => window.location.href='/boxes'}
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
    </Row>

    <Row>
      <Col size="md-12">
        <div className="p-a">
          <p>Bottom line:</p>
          <p>
            Mamas still need quite a bit of care after giving birth, but too
            often, the mama’s needs get put on the backburner while focusing on
            their newest addition.
          </p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col size="md-12">
        <div className="p-a">
          This is where La Mama Care steps in. Our care kits are intended to
          provide moms with the sustenance and supplies they need to ensure
          their own self care during this critical time in their lives when time
          for themselves is limited. Through handy, healthy snacks and other
          practical essentials, our kits are intended to surround the mother
          with must-have items and helpful information to help navigate the
          critical 4th trimester. In addition, we use a unique approach to bring
          together the mom’s support system to ensure everyone is working
          together to provide the comfort and encouragement the mom needs.
        </div>
      </Col>
    </Row>

    <Row>
      <Col size="md-12">
        <div className="p-a" id="included">
          What all is included in a La Mama Care box? La Mama Care strives not
          only to support and nourish, but also educate moms during this
          important time. Some of the items in the box include:
          <ul>
            <li>
              A La Mama Care water bottle with important hydration guidelines
              for the postpartum period.
            </li>
            <li>
              Nutritious and handy snacks to satisfy when time is limited.
            </li>
            <li>
              Personal care items to aid the postpartum body in recuperating
              from the major changes that have just taken place.{" "}
            </li>
            <li>
              Most importantly, a resource book that walks the mom through the
              best ways to take care of herself both physically and emotionally
              over the next year.
            </li>
          </ul>
          <p>          All items will come with helpful hints on how to use and where to
          purchase additional supplies, as well as other available options at a
          variety of price points.</p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col size="md-2" />

      <Col size="md-8">
        <div className="p-a">
          La Mama Care’s hope is that every mom receives the love and support
          she deserves after embarking on one of life’s most exciting journeys.
          We hope to build not just a product, but a community that continues to
          grow and nurture each other through the years.
        </div>
      </Col>

      <Col size="md-2" />
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