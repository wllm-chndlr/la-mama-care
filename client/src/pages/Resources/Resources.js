import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import "./Resources.css";
import Paper from "../../components/Paper";



const Resources = () => (
  <Container fluid className="cont-a">
    <div id="resources-main">
      <Tagline>Resources</Tagline>

      <div className="res-pap" style={{ maxWidth: "33%", margin: "5%" }}>
        <Paper>
          <p className="p-bio" >
            <a
              style={{
                color: "#fff",
                background: "url('../../images/stardust.png')"
              }}
              href="http://www.postpartum.net/"
              target="_blank"
            >
              Postpartum Support International
            </a>
          </p>
        </Paper>
      </div>

      <div className="res-pap" style={{ maxWidth: "33%", margin: "5%" }}>
        <Paper>
          <p className="p-bio" >
            <a
              style={{
                color: "#fff",
                background: "url('../../images/stardust.png')"
              }}
              href="https://www.seleni.org/"
              target="_blank"
            >
              Seleni Institute
            </a>
          </p>
        </Paper>
      </div>

      <div className="res-pap" style={{ maxWidth: "33%", margin: "5%" }}>
        <Paper>
          <p className="p-bio" >
            <a
              style={{
                color: "#fff",
                background: "url('../../images/stardust.png')"
              }}
              href="https://kellymom.com/"
              target="_blank"
            >
              Kelly Mom
            </a>
          </p>
        </Paper>
      </div>
    </div>
  </Container>
);

export default Resources;