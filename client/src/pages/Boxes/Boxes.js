import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
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
    if (this.state.title && this.state.author) {
      API.saveBox({
        title: this.state.title,
        price: this.state.price,
        description: this.state.description
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
              <h1>What Boxes Should I Gift?</h1>
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
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
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
              <h1>Boxes On My List</h1>
            </Jumbotron>
            {this.state.boxes.length ? (
              <List>
                {this.state.boxes.map(box => (
                  <ListItem key={box._id}>
                    <Link to={"/boxes/" + box._id}>
                      <strong>
                        {box.title} for {box.price}
                      </strong>
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
