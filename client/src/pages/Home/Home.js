import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Paper from "../../components/Paper";
import Tagline from "../../components/Tagline";

const Home = () => (
  <Container fluid>
    <Tagline>Not all heroes wear capes.</Tagline>
    <Row>
      <Col size="md-6">
      {/* <img
        src="http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2017/05/12234626/momsassuperheros-SUPERMUM-blog.jpg"
        alt="supermum"
        style={{
          width: "100%",
          opacity: "0.7",
          paddingleft: "0px",
          paddingright: "0px",
          margin: "auto"
        }}
      /> */}
        <div>
          <h3 style={{color: "#444"}}>Focused on a mother’s holistic wellbeing immediately following childbirth, our postpartum care kits provide moms with must-have self-care items for this critical time.</h3>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
