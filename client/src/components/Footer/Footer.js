import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
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
        <div className="mailing">
          <Col size="md-2" />
          <Col size="md-4">
            <TextField
              hintText="supermama@hero.org"
              floatingLabelText="SIGN UP"
              style={{
                width: "66%",
                marginLeft: "0px",
                color: "rgb(199, 199, 199)"
              }}
              type={"email"}
              hintStyle={{ fontSize: "1.5rem" }}
              floatingLabelStyle={{
                fontSize: "1.5rem",
                color: "rgb(0, 178, 169)"
              }}
              underlineStyle={{ borderColor: "rgb(90,90,90)" }}
            />
            <FlatButton label="Submit" hoverColor="rgb(0, 178, 169)" />
          </Col>


          <Col size="md-2" />

          <Col size="md-4">
            <div id="social-div">
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
            </div>
          </Col>
        </div>
      </Row>

      <Row>
        <Col size="md-4" />

        <Col size="md-1">
          <a href="#" className="foot-cont">
            Contact
          </a>
        </Col>
        <Col size="md-1">
          <a href="#" className="foot-cont">
            About Us
          </a>
        </Col>
        <Col size="md-1">
          <a href="#" className="foot-cont">
            Care Kit
          </a>
        </Col>
        <Col size="md-1">
          <a href="#" className="foot-cont">
            Resources
          </a>
        </Col>
        <Col size="md-4" />
      </Row>

      <Row>
        <Col size="md-5" />

        <Col size="md-2">
          <p className="foot-cont">© La Mama Care 2017</p>
        </Col>
        <Col size="md-5" />
      </Row>
    </footer>
  </Container>
);

export default Foot;