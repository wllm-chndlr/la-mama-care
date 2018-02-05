import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import "./Resources.css";
import Paper from "../../components/Paper";



const Resources = () => (
  <Container fluid className="cont-a">
    <div id="resources-main">
      <Tagline>Resources</Tagline>

      <Row>

      <Col size="md-4">
      <div className="res-pap" style={{ maxWidth: "80%", margin: "5%" }}>
        <Paper>
          <p className="p-bio">
            <a
              style={{
                color: "#fff",
                background: "url('../../images/stardust.png')"
              }}
              href="http://www.postpartum.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Postpartum Support International
            </a>
          </p>
        </Paper>
      </div>
      </Col>

      <Col size="md-4">
      <div className="res-pap" style={{ maxWidth: "80%", margin: "5%" }}>
        <Paper>
          <p className="p-bio">
            <a
              style={{
                color: "#fff",
                background: "url('../../images/stardust.png')"
              }}
              href="https://www.seleni.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seleni Institute
            </a>
          </p>
        </Paper>
      </div>
      </Col>

      <Col size="md-4">
      <div className="res-pap" style={{ maxWidth: "80%", margin: "5%" }}>
        <Paper>
          <p className="p-bio">
            <a
              style={{
                color: "#fff",
                background: "url('../../images/stardust.png')"
              }}
              href="https://kellymom.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kelly Mom
            </a>
          </p>
        </Paper>
      </div>
      </Col>

      </Row>
    </div>
  </Container>
);

export default Resources;