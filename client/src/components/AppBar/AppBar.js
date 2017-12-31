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
  // <AppBar
  //   // iconClassNameRight="muidocs-icon-navigation-expand-more"
  //   style={{
  //     backgroundColor: "#fff",
  //     marginBottom: "30px"
  //   }}
  // >
    <Container style={{borderBottom: "1px solid rgb(182, 207, 208)"}}>
      <Row>
        <Col size="md-6">
          <a href="/">
            <img
              src={logo}
              alt={"logo"}
              style={{
                width: "75%",
                height: "75%",
                padding: "2%",
                marginBottom: "30px"
              }}
            />
          </a>
        </Col>
        <Col size="md-6" id="navbtns" style={{marginTop: "30px"}}>
          <ul className="nav nav-pills nav-justified">
            <li role="presentation" className="active">
              <a href="/home">home</a>
            </li>
            <li role="presentation">
              <a href="/about">about</a>
            </li>
            <li role="presentation">
              <a href="/packages">packages</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  // </AppBar>
);

export default AppBarTop;