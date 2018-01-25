import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";


const Foot = () => (
  <Container fluid>
    <footer
      className="navbar-bottom"
      id="footer"
      style={{ marginRight: "0px" }}
    >
      {/* <footer> */}
      <Row>
        <Col size="md-3" />
        <Col size="md-6">
          <div className="mailing">
            <TextField
              hintText="supermama@hero.org"
              floatingLabelText="Sign up"
              style={{ width: "50%", marginLeft: "30px" }}
            />
            <RaisedButton
              label="Submit"
              primary={true}
              style={{ margin: "12px" }}
            />
          </div>
        </Col>
        <Col size="md-3" />
      </Row>

      <Row>
        <Col size="md-2" />
        <Col size="md-3">
          <span>
            <a href="#">
              <img src={Twitter} className="social-icon" />
            </a>
            <a href="#">
              <img src={Instagram} className="social-icon" />
            </a>
            <a href="#">
              <img src={Facebook} className="social-icon" />
            </a>
          </span>
        </Col>
        <Col size="md-3">
          <p className="foot-cont">Contact</p>
          <p className="foot-cont">About Us</p>
        </Col>
        <Col size="md-3">
          <p className="foot-cont">© La Mama Care 2017</p>
        </Col>
        <Col size="md-1" />
      </Row>
    </footer>
  </Container>
);

export default Foot;