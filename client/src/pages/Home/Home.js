import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Paper from "../../components/Paper";
import Tagline from "../../components/Tagline";

const Home = () => (
  <Container fluid>
    <Tagline />
    <Row>
      <img
        src="http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2017/05/12234626/momsassuperheros-SUPERMUM-blog.jpg"
        alt="supermum"
        style={{
          width: "100%",
          opacity: "0.7",
          paddingleft: "0px",
          paddingright: "0px",
          margin: "auto"
        }}
      />
    </Row>
  </Container>
);

export default Home;
