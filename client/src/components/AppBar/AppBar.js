import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import logo from '../../images/logo_crop.png'
import cart from '../../images/cart.svg'
import "./AppBar.css";

const AppBarTop = () => (
  <Container fluid>
    <div className="app-main">
      <Row>
        <Col size="md-6">
          <a href="/">
            <img
              src={logo}
              alt={"logo"}
              style={{
                width: "20%",
                height: "20%",
                margin: "2%"
              }}
            />
          </a>
        </Col>
        <Col size="md-6" id="navbtns" style={{ marginTop: "30px" }}>
          <div id="app-link-div">
          <ul className="nav nav-pills nav-justified">
            <li className="app-link" role="presentation">
              <a href="/kit">
                care kit
              </a>
            </li>
            <li className="app-link" role="presentation">
              <a href="/resources">
                resources
              </a>
            </li>
            <li className="app-link" role="presentation">
              <a href="/about">
                about
              </a>
            </li>
            <li className="app-link" role="presentation">
              <a href="#">
                <img
                  className="snipcart-checkout"
                  id="shop-cart"
                  src={cart}
                  alt={cart}
                  // style={{marginLeft: "4rem"}}
                />
              </a>
            </li>
          </ul>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

export default AppBarTop;
