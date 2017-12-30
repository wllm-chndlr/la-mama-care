import React from "react";
import AppBar from "material-ui/AppBar";
import { Col, Row, Container } from "../../components/Grid";
import logo from '../../images/logo.png'
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
  <AppBar
    // iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      backgroundColor: "#fff",
      marginBottom: "30px"
    }}
  >
    <Container>
      <Row>
        <Col size="md-8">
          <a href="/">
            <img
              src={logo}
              alt={"logo"}
              style={{
                width: "30%",
                height: "30%",
                padding: "2%"
              }}
            />
          </a>
        </Col>
        <Col size="md-4">
          <ul>
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/packages">packages</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </AppBar>
);





export default AppBarTop;