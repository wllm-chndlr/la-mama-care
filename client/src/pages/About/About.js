import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Tagline from "../../components/Tagline";
import "./About.css";


const About = () => (
  <Container fluid>
    <Tagline>About</Tagline>
    <Row>
      
      <Col size="md-12">

        <div className="p-a">
          <p>Lorem ipsum dolor sit amet, doming incorrupte no nam, putant virtute nec ei. In possit blandit petentium sit, laudem fabellas eu pro. Id mel purto diceret delicata, id partiendo molestiae disputando nec. Ut harum tibique sensibus vis, cu mea tale oporteat.</p>

          <p>No mea tale equidem theophrastus, tractatos suavitate moderatius ad est, munere omnium hendrerit cu usu. No ius admodum vivendum, duis eligendi convenire eu sea. Cum meis habemus reformidans ea, quaeque habemus concludaturque quo eu. Vim eu saepe mentitum instructior.</p>

          <p>Ea tamquam integre definitionem usu. Deleniti constituam cu vel, ex erat iusto noluisse pro. Id nec sint aliquip, an homero doming dissentias usu. An has referrentur efficiantur, ubique bonorum definitiones ne nam. Nisl inani at eam. In possim reformidans mea, sumo putent mollis per ad, stet impedit vis in.
          </p>
        </div>
      </Col>

    </Row>
  </Container>
);

export default About;
