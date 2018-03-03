import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import logo from '../../images/logo_crop.png'
import cart from '../../images/cart.svg'
import "./AppBar.css";


// function ActionLink() {

//   function handleClick(e) {
//     e.preventDefault();
//     console.log("The link was clicked.");
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// function click(e) {
//     e.preventDefault();
// }


const AppBarTop = () => (
  <Container fluid>
    <div className="app-main">
      <Row>
        <Col size="md-5">
          <div id="logo-div">
            <a href="/" id="logo-link">
              <img
                src={logo}
                alt={"logo"}
                id="lmcLogo"
                style={{
                  width: "33%",
                  height: "33%",
                  margin: "3%"
                }}
              />
            </a>
          </div>
        </Col>
        
        <Col size="md-7" id="navbtns">
          <div id="nav-div">
            <ul className="nav nav-pills nav-justified">
              <li className="app-link" role="presentation">
                <a href="/kit">care kit</a>
              </li>
              <li className="app-link" role="presentation">
                <a href="/resources">resources</a>
              </li>
              <li className="app-link" role="presentation">
                <a href="/about">about us</a>
              </li>
              {/* <li className="app-link" role="presentation">
                <a href="#">
                  <img
                    className="snipcart-checkout"
                    id="shop-cart"
                    src={cart}
                    alt={cart}
                  />
                </a>
              </li> */}
            </ul>
          </div>
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
