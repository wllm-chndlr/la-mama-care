import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import CardExample from "../../components/Card";
import Tagline from "../../components/Tagline";
import Paper from "../../components/Paper";
import "./Items.css";
import AOS from "aos";


class Items extends Component {
  state = {
    items: [],
    title: "",
    description: ""
  };

  componentDidMount() {
    this.loadItems();
    AOS.init();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({
          items: res.data,
          title: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return <Container fluid>
        <div id="items-main">
          <Tagline>Care Kit</Tagline>

          {/* <Row>
            <Col size="md-2" />
            <Col size="md-8">
              <div className="p-a">
                <p>
                  Here are some of the items we include in our care kits.
                </p>
              </div>
            </Col>
            <Col size="md-2" />
          </Row> */}

          <Row>
            <Col size="md-12 sm-12">
              {this.state.items.length ? <div>
                  {this.state.items.map(item => 
                  <Col size="md-4">
                      <CardExample itemID={item.itemID} image={item.image} title={item.title} description={item.description} />
                  </Col>)}
                </div> : <h3>No Results to Display</h3>}
            </Col>
          </Row>
        </div>
      </Container>;
  }
}

export default Items;