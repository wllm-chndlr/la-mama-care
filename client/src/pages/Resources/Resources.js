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
        <Col size="md-2" />
        <Col size="md-8">
          <p style={{ fontSize: "2rem", marginBottom: "4rem", padding: "0 3% 0 3%" }}>
            Each care kit includes a resource book filled with helpful
            information for new moms and their families. Included below are some
            additional resources for anyone navigating the postpartum period.
          </p>
        </Col>
        <Col size="md-2" />
      </Row>

      <Row>
        <Col size="md-1" />
        <Col size="md-5">
          <div className="res-pap" style={{ maxWidth: "75%", margin: "5%" }}>
            <Paper>
              <h2 className="res-header">Mental Health</h2>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="http://www.postpartum.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Postpartum Support International
                </a>
              </p>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://www.seleni.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seleni Institute
                </a>
              </p>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://womensmentalhealth.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MGH Center for Women's Mental Health
                </a>
              </p>
            </Paper>
          </div>
        </Col>

        <Col size="md-5">
          <div className="res-pap" style={{ maxWidth: "75%", margin: "5%" }}>
            <Paper>
              <h2 className="res-header">Support</h2>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://www.mealtrain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meal Train
                </a>
              </p>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://www.carecalendar.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Care Calendar
                </a>
              </p>
            </Paper>
          </div>
        </Col>
        <Col size="md-1" />
      </Row>

      <Row>
        <Col size="md-1" />
        <Col size="md-5">
          <div className="res-pap" style={{ maxWidth: "75%", margin: "5%" }}>
            <Paper>
              <h2 className="res-header">Feeding</h2>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://kellymom.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kelly Mom
                </a>
              </p>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://ibconline.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  International Breastfeeding Centre
                </a>
              </p>
            </Paper>
          </div>
        </Col>

        <Col size="md-5">
          <div
            className="res-pap"
            id="res-last-div"
            style={{ maxWidth: "75%", margin: "5%" }}
          >
            <Paper>
              <h2 className="res-header">Books</h2>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://www.amazon.com/First-Forty-Days-Essential-Nourishing/dp/1617691836"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em>
                    The First 40 Days: The Essential Art of Nourishing the New
                    Mother
                  </em>
                  <br /> by Heng Ou
                </a>
              </p>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Dstripbooks&field-keywords=karen+kleinman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em>
                    This Isn’t What I Expected: Overcoming Postpartum Depression
                  </em>
                  <br />
                  by Karen Kleinman
                </a>
              </p>
              <p className="p-bio">
                <a
                  style={{
                    color: "rgb(90,90,90",
                    background: "url('../../images/stardust.png')"
                  }}
                  href="https://www.amazon.com/Postpartum-Husband-Practical-Solutions-Depression/dp/0738836362/ref=sr_1_1?s=books&ie=UTF8&qid=1517884472&sr=1-1&keywords=postpartum+husband"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em>
                    The Postpartum Husband: Practical Solutions for Living with
                    Postpartum Depression
                  </em>
                  <br /> by Karen Kleinman
                </a>
              </p>
            </Paper>
          </div>
        </Col>
        <Col size="md-1" />
      </Row>
    </div>
  </Container>
);

export default Resources;