import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import AppBar from "../../components/AppBar";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h3>What Boxes Should I Gift?</h3>
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
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h3>Boxes On My List</h3>
            </Jumbotron>
            {this.state.boxes.length ? (
              <List>
                {this.state.boxes.map(box => (
                  <ListItem key={box._id}>
                    <Link to={"/boxes/" + box._id}>
                      <strong>
                        {box.title} for {box.price}
                      </strong>
                      <img alt="box" src={box.image}/>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBox(box._id)} />
                  </ListItem>
                ))}
              </List>
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
