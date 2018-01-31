import React from "react";
import AppBar from "material-ui/AppBar";
import { Col, Row, Container } from "../../components/Grid";
import logo from '../../images/logo.png'
import cart from '../../images/cart.svg'
import "./AppBar.css";


// const AppBarExampleIcon = () => (
//   <AppBar
//     className="appBar"
//     title="La Mama Care"
//     // iconClassNameRight="muidocs-icon-navigation-expand-more"
//     // iconElementRight="muidocs-icon-navigation-expand-more"
//     iconElementLeft={
//       <img
//         src={logo}
//         href={"/"}
//         alt={"logo"}
//         style={{
//           width: "20%",
//           padding: "2%"
//         }}
//       />
//     }
//     style={{
//       backgroundColor: "#fff",
//       marginBottom: "30px"
//     }}
//   />
// );


const AppBarTop = () => (
  // <AppBar
  //   // iconClassNameRight="muidocs-icon-navigation-expand-more"
  //   style={{
  //     backgroundColor: "#fff",
  //     marginBottom: "30px"
  //   }}
  // >
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
                // padding: "2%",
                margin: "2%"
              }}
            />
          </a>
        </Col>
        <Col size="md-6" id="navbtns" style={{ marginTop: "30px" }}>
          <ul className="nav nav-pills nav-justified">
            {/* <li role="presentation">
            <a href="/home">home</a>
          </li> */}
            <li role="presentation">
              <a href="/boxes">care kit</a>
            </li>
            <li role="presentation">
              <a href="/resources">resources</a>
            </li>
            <li role="presentation">
              <a href="/about">about</a>
            </li>
            <li role="presentation">
              <a href="#" className="snipcart-checkout">
                <img id='shop-cart' src={cart} alt={cart} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  </Container>
  // </AppBar>
);

export default AppBarTop;

