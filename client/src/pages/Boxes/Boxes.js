import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import CardExample from "../../components/Card";
import Tagline from "../../components/Tagline";


class Boxes extends Component {
  state = {
    boxes: [],
    title: "",
    price: "",
    description: ""
  };

  componentDidMount() {
    this.loadBoxes();
  }

  loadBoxes = () => {
    API.getBoxes()
      .then(res =>
        this.setState({ boxes: res.data, title: "", price: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBox = id => {
    API.deleteBox(id)
      .then(res => this.loadBoxes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
          <Tagline>Packages</Tagline>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h3>Add new box</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
              />
              <FormBtn
                disabled={!(this.state.price && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Box
              </FormBtn>
            </form>
          </Col> */}
          <Col size="md-12 sm-12">

            {this.state.boxes.length ? (

            <div>

              {this.state.boxes.map(box => (

                <Col size="md-4">
                
                  <CardExample
                    image={box.image}
                    title={box.title}
                    price={box.price}
                    description={box.description}
                  />

                </Col>

              ))}

            </div>



            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Boxes;
