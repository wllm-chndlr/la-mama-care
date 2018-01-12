import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "react";



const Foot = () => (
  <Container fluid>
    <footer
      className="navbar-bottom"
      id="footer"
      style={{ marginRight: "0px" }}
    >
      {/* <footer> */}
      <Row>
        <Col size="md-3">
          <p className="foot-cont">Twitter</p>
          <p className="foot-cont">Instagram</p>
          <p className="foot-cont">Facebook</p>
        </Col>
        <Col size="md-3">
          <p className="foot-cont">Contact</p>
        </Col>
        <Col size="md-6">
          <p className="foot-cont">© La Mama Care 2017</p>
        </Col>
      </Row>
    </footer>
  </Container>
);

export default Foot;