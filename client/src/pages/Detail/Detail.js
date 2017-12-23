import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    box: {}
  };
  // When this component mounts, grab the box with the _id of this.props.match.params.id
  // e.g. localhost:3000/boxes/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBox(this.props.match.params.id)
      .then(res => this.setState({ box: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>
                {this.state.box.title}
                <br />
                ${this.state.box.price}
              </h3>
              <h4>
                {this.state.box.description}
              </h4>
              <img alt="box" src={this.state.box.image}/>
            </Jumbotron>
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Description</h3>
              <p>{this.state.box.description}</p>
            </article>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to wherever</Link>
          </Col>
        </Row>
      </Container>;
  }
}

export default Detail;
