import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import jc from '../../images/jc-new.jpg'
import nm from "../../images/nm-new.jpg";
import ac from "../../images/ac-new.jpg";
import "./About.css";
import Paper from "../../components/Paper";



const About = () => (
  <Container fluid className="cont-a">
    <div id="about-main">
      <Tagline style={{ color: "#fff" }}>About Us</Tagline>

      <div className="individual">
        <Row>
          <Col size="md-1" />

          <Col size="md-6">
            <Paper>
              <div className="p-bio">
                <p className="p-header">Jacqueline Chandler</p>
                Jacqueline is a birth and postpartum doula in Austin, Texas. Her
                parenting journey began 4 years ago with the birth of her smart,
                funny son Lochlan. She has a special place in her heart for NICU
                parents as her daughter, who was born in January 2018, spent 10
                days in intensive care after she decided to make an arrival at
                34 weeks gestation. When not nerding out on all things birth and
                parenting, you will find Jacqueline eating tacos and playing out
                in the yard with her sweet family.
              </div>
            </Paper>
          </Col>

          <Col size="md-4">
            <Paper>
              <img className="headshot" src={jc} alt="jacqueline chandler" />
            </Paper>
          </Col>

          <Col size="md-1" />
        </Row>
      </div>

      <div className="individual">
        <Row>
          <Col size="md-1" />
          <Col size="md-4">
            <Paper>
              <img className="headshot" src={ac} alt="anne clary" />
            </Paper>
          </Col>
          <Col size="md-6">
            <Paper>
              <div className="p-bio">
                <p className="p-header">Anne Clary</p>
                Vape poke celiac flexitarian locavore fixie stumptown. Master
                cleanse retro try-hard, tattooed you probably haven't heard of
                them lo-fi seitan kombucha meggings fingerstache keffiyeh next
                level. Kale chips freegan food truck flexitarian palo santo meh
                YOLO brooklyn, meggings forage viral. Migas crucifix tumblr
                marfa shabby chic waistcoat sartorial pop-up four loko blog.
                Pabst cold-pressed slow-carb jianbing street art copper mug raw
                denim disrupt.
              </div>
            </Paper>
          </Col>
          <Col size="md-1" />
        </Row>
      </div>

      <div className="individual">
        <Row>
          <Col size="md-1" />

          <Col size="md-6">
            <Paper>
              <div className="p-bio">
                <p className="p-header">Nique Mayo</p>
                Health goth tbh chicharrones, narwhal kitsch +1 vinyl iPhone
                ramps. Authentic stumptown before they sold out snackwave
                hashtag coloring book pickled fashion axe lyft XOXO la croix
                PBR&B. Viral hot chicken meh stumptown selfies pitchfork cray
                DIY photo booth flannel franzen letterpress. Quinoa irony
                chartreuse fashion axe lo-fi master cleanse pok pok direct trade
                raclette listicle skateboard cloud bread vaporware.
              </div>
            </Paper>
          </Col>
          <Col size="md-4">
            <Paper>
              <img className="headshot" src={nm} alt="nique mayo" />
            </Paper>
          </Col>
          <Col size="md-1" />
        </Row>
      </div>
    </div>
  </Container>
);

export default About;
