import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Tagline from "../../components/Tagline";
import jc from '../../images/jc2.jpg'
import nm from "../../images/nm.jpg";
import ac from "../../images/ac.jpg";
import "./About.css";


const About = () => (
  <Container fluid className="cont-a">
    <div id="about-main">
      <Tagline>About Us</Tagline>

      <Row>
        <Col size="md-8">
          <div className="p-bio">
            <p className="p-header">Jacqueline Chandler</p>
            <br />
            Stumptown bicycle rights seitan, brunch ramps keytar master cleanse
            bespoke iceland messenger bag live-edge skateboard vinyl. Man braid
            +1 four loko 3 wolf moon church-key coloring book tofu banjo organic
            knausgaard asymmetrical forage banh mi vape. Wolf PBR&B fixie irony
            freegan, taiyaki pitchfork chambray salvia tbh literally raclette.
            XOXO freegan la croix photo booth schlitz street art pok pok
            heirloom. Lumbersexual disrupt pickled chambray gentrify.
          </div>
        </Col>
        <Col size="md-4">
          <img
            src={jc}
            alt="jacqueline chandler"
            style={{
              width: "80%",
              height: "80%",
              marginBottom: "5rem",
              borderRadius: "45px"
              // transform: "rotate(90deg)"
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col size="md-4">
          <img
            src={ac}
            alt="anne clary"
            style={{
              width: "80%",
              height: "80%",
              marginLeft: "6%",
              marginBottom: "5rem",
              borderRadius: "45px"
            }}
          />
        </Col>
        <Col size="md-8">
          <div className="p-bio">
            <p className="p-header">Anne Clary</p>
            <br />
            Vape poke celiac flexitarian locavore fixie stumptown. Master
            cleanse retro try-hard, tattooed you probably haven't heard of them
            lo-fi seitan kombucha meggings fingerstache keffiyeh next level.
            Kale chips freegan food truck flexitarian palo santo meh YOLO
            brooklyn, meggings forage viral. Migas crucifix tumblr marfa shabby
            chic waistcoat sartorial pop-up four loko blog. Pabst cold-pressed
            slow-carb jianbing street art copper mug raw denim disrupt.
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-8">
          <div className="p-bio">
            <p className="p-header">Nique Mayo</p>
            <br />
            Health goth tbh chicharrones, narwhal kitsch +1 vinyl iPhone ramps.
            Authentic stumptown before they sold out snackwave hashtag coloring
            book pickled fashion axe lyft XOXO la croix PBR&B. Viral hot chicken
            meh stumptown selfies pitchfork cray DIY photo booth flannel franzen
            letterpress. Quinoa irony chartreuse fashion axe lo-fi master
            cleanse pok pok direct trade raclette listicle skateboard cloud
            bread vaporware.
          </div>
        </Col>
        <Col size="md-4">
          <img
            src={nm}
            alt="nique mayo"
            style={{
              width: "80%",
              height: "80%",
              marginBottom: "5rem",
              borderRadius: "45px"
            }}
          />
        </Col>
      </Row>
    </div>
  </Container>
);

export default About;
