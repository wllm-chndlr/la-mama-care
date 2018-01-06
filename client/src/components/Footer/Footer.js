import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "react";



const Foot = () => (
  <Container fluid>
  <footer className="navbar-bottom" id="footer" style={{ marginRight: "0px" }}>
    {/* <footer> */}
    <Row>
      <Col size="md-4">
        <p className="foot-cont">Twitter</p>
      </Col>
      <Col size="md-4">
        <p className="foot-cont">© 2017 La Mama Care</p>
      </Col>
      <Col size="md-4">
        <p className="foot-cont">Contact</p>
      </Col>
    </Row>
  </footer>
  </Container>
);

export default Foot;