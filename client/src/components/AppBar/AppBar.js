import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import logo from '../../images/logo_crop.png'
import cart from '../../images/cart.svg'
import "./AppBar.css";

const AppBarTop = () => (
  <Container fluid>
    <div className="app-main">
      <Row>
        <Col size="md-4">
          <a href="/">
            <img
              src={logo}
              alt={"logo"}
              style={{
                width: "33%",
                height: "33%",
                margin: "2%"
              }}
            />
          </a>
        </Col>
      <Col size="md-6" id="navbtns">
          <ul className="nav nav-pills nav-justified">
            <li className="app-link" role="presentation">
              <a href="/kit">care kit</a>
            </li>
            <li className="app-link" role="presentation">
              <a href="/resources">resources</a>
            </li>
            <li className="app-link" role="presentation">
              <a href="/about">about</a>
            </li>
            <li className="app-link" role="presentation">
              <a href="#">
                <img
                  className="snipcart-checkout"
                  id="shop-cart"
                  src={cart}
                  alt={cart}
                />
              </a>
            </li>
          </ul>
        </Col>

        {/* <div id="nav-div">
          <Col size="md-3">
            <div className="nav-item">
              <a href="/kit">care kit</a>
            </div>
          </Col>
          <Col size="md-3">
            <div className="nav-item">
              <a href="/resources">resources</a>
            </div>
          </Col>
          <Col size="md-3">
            <div className="nav-item">
              <a href="/about">about</a>
            </div>
          </Col>
          <Col size="md-3">
            <div className="nav-item">
              <a href="#">
                <img
                  className="snipcart-checkout"
                  id="shop-cart"
                  src={cart}
                  alt={cart}
                />
              </a>
            </div>
          </Col>
        </div> */}
      </Row>
    </div>
  </Container>
);

export default AppBarTop;
