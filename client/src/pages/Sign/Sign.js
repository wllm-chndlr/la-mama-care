import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import CardExample from "../../components/Card";
import Tagline from "../../components/Tagline";
import packageImg from "../../images/package.jpeg";
import "./Sign.css";


class Boxes extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    // this.loadBoxes();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //************
  // NEED TO UPDATE THIS TO HANDLE USER SUBMISSION
  //************
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.price) {
      API.saveBox({
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        quantity: this.state.quantity
      })
        .then(res => this.loadBoxes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <div id="sign-main">
          <Tagline>Sign up or sign in</Tagline>

          <Row>
            <Col size="md-1" />
            <Col size="md-4">
              <h3 className="sign">Sign up</h3>
              <form>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name (required)"
                />
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />
                <FormBtn
                  disabled={!(this.state.name && this.state.email)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
            <Col size="md-1" />

            <Col size="md-4">
              <h3 className="sign">Sign in</h3>
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />
                <FormBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
            <Col size="md-2" />
          </Row>
        </div>
      </Container>
    );
  }
}

export default Boxes;
