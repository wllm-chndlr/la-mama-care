import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";



const Foot = () => (
  <Container fluid>
    <footer
      className="navbar-bottom"
      id="footer"
      style={{ marginRight: "0px" }}
    >
      {/* <footer> */}
      <Row>
        <Col size="md-3"/>
        <Col size="md-6">
          <div className="mailing">
            <TextField
              hintText="supermama@hero.org"
              floatingLabelText="Sign up"
            />
            <RaisedButton label="Submit" style={{ margin: "12px" }} />
          </div>
        </Col>
        <Col size="md-3" />
      </Row>

      <Row>
        <Col size="md-1" />
        <Col size="md-3">
          <p className="foot-cont">Twit</p>
          <p className="foot-cont">Inst</p>
          <p className="foot-cont">Face</p>
        </Col>
        <Col size="md-4">
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