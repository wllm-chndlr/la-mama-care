import React from "react";
import { Col, Row, Container } from "../../components/Grid";


const Tagline = props => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div>
          <h1
            style={{
              // fontFamily: "'Squada One', cursive",
              fontFamily: "'Bungee Shade', cursive",
              letterSpacing: "0.3em",
              fontSize: "50px",
              color: "rgb(90, 90, 90)",
              // backgroundColor: "rgb(182, 207, 208)",
              marginBottom: "3%",
              // marginLeft: "3%",
              padding: "20px 40px",
              // borderTop: "1px solid rgb(0, 125, 138)",
              // borderBottom: "1px solid rgb(0, 125, 138)",
              // boxShadow: "5px 5px rgb(218, 218, 218)",
              textAlign: "center"
            }}
          >
            {props.children}
          </h1>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Tagline;