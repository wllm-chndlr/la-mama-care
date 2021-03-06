import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";


const Foot = () => (
  <Container fluid>
    <footer
      className="navbar-bottom"
      id="footer"
      style={{ marginRight: "0px" }}
    >
      <Row>
        <div id="mailing" style={{ textAlign: "center" }}>
          <Col size="md-2" />
          {/* <Col size="md-4">
            <TextField
              hintText="supermama@hero.org"
              floatingLabelText="SIGN UP"
              style={{
                width: "66%",
                marginLeft: "0px",
                color: "rgb(199, 199, 199)"
              }}
              type={"email"}
              hintStyle={{ fontSize: "1.5rem" }}
              floatingLabelStyle={{
                fontSize: "1.5rem",
                color: "rgb(0, 178, 169)"
              }}
              underlineStyle={{ borderColor: "rgb(90,90,90)" }}
            />
            <FlatButton label="Submit" hoverColor="rgb(0, 178, 169)" />
          </Col> */}

          {/* <Col size="md-4">
          
            <div id="mc_embed_signup" style={{background:"#fff", clear:"left", font:"14px, Helvetica,Arial,sans-serif", width:"100%"}}>
              <form action="https://lamamacare.us17.list-manage.com/subscribe/post?u=2442aa5f68e55a714269be4e1&amp;id=7c3c6a8080" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  
                  <div id="mc_embed_signup_scroll">
                  
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                      <div style={{position: "absolute", left: "-5000px", ariaHidden: "true"}}><input type="text" name="b_2442aa5f68e55a714269be4e1_7c3c6a8080" tabindex="-1" value=""/>
                      </div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                    
                  </div>

              </form>
            </div>

          </Col> */}

          <Col size="md-4">
            <div id="mc_embed_signup" style={{ clear: "left" }}>
              <form
                action="https://lamamacare.us17.list-manage.com/subscribe/post?u=2442aa5f68e55a714269be4e1&amp;id=7c3c6a8080"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    {/* <input
                      type="email"
                      // value=""
                      name="EMAIL"
                      className="required email"
                      placeholder="email"
                      id="mce-EMAIL"
                    />
                  </div> */}
                    <TextField
                      id="mce-EMAIL"
                      hintText="supermama@hero.org"
                      floatingLabelText="SIGN UP"
                      style={{
                        width: "100%",
                        marginLeft: "0px",
                        color: "rgb(199, 199, 199)"
                      }}
                      type="email"
                      // value=""
                      name="EMAIL"
                      className="required email"
                      hintStyle={{ fontSize: "1.5rem" }}
                      floatingLabelStyle={{
                        fontSize: "1.5rem",
                        color: "rgb(0, 178, 169)"
                      }}
                      underlineStyle={{ borderColor: "rgb(90,90,90)" }}
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "-5000px",
                      ariaHidden: "true"
                    }}
                  >
                    <input
                      type="text"
                      name="b_2442aa5f68e55a714269be4e1_7c3c6a8080"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <FlatButton
                      label="Submit"
                      hoverColor="rgb(0, 178, 169)"
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      style={{ textAlign: "left" }}
                      className="button"
                      // onClick="document.getElementById('mce-EMAIL').value = ''"
                      onClick={() =>
                        document.getElementById('mce-EMAIL').value = ''
                      }
                    />
                  </div>
                  {/* <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      style={{ background: "rgb(0, 178, 169)" }}
                    />
                  </div> */}
                </div>
              </form>
            </div>
          </Col>

          {/* <Col size="md-1">
            <FlatButton
            label="Submit"
            hoverColor="rgb(0, 178, 169)"
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            // style={{marginTop: "33%"}}
            />
          </Col> */}

          {/* <Col size="md-2" /> */}

          <Col size="md-6">
            <div
              id="social-div"
              style={{
                textAlign: "center"
              }}
            >
              <span>
                <a href="https://www.instagram.com/lamamacare/">
                  <img
                    src={Instagram}
                    alt={Instagram}
                    className="social-icon"
                  />
                </a>
                <a href="https://www.facebook.com/lamamacare/">
                  <img src={Facebook} alt={Facebook} className="social-icon" />
                </a>
              </span>
            </div>
          </Col>
        </div>
      </Row>

      <Row>
        <Col size="md-4" />

        <Col size="md-4">
          <div
            style={{
              textAlign: "center",
              paddingTop: "2rem",
              paddingBottom: "2rem"
            }}
          >
            <a href="/kit" className="foot-cont">
              Care Kit
            </a>
            <a href="/resources" className="foot-cont">
              Resources
            </a>
            <a href="/about" className="foot-cont">
              About Us
            </a>
          </div>
        </Col>

        <Col size="md-4" />
      </Row>

      <Row>
        <Col size="md-5" />

        <Col size="md-2">
          <div
            style={{
              textAlign: "center"
            }}
          >
            <p className="foot-cont">© La Mama Care 2018</p>
          </div>
        </Col>
        <Col size="md-5" />
      </Row>
    </footer>
  </Container>
);

export default Foot;