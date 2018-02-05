import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import CardExample from "../../components/Card";
import Tagline from "../../components/Tagline";
import FlatButton from "material-ui/FlatButton";
import packageImg from "../../images/package.jpeg";
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

          <Row>
            <Col size="md-4">
              <img 
                src={packageImg} 
                alt="care kit" 
                data-aos={"flip-up"} 
                data-aos-offset={500} 
                data-aos-duration="600"
                style={{ 
                  maxWidth: "100%", 
                  minHeight: "30rem", 
                  borderTop: "3px solid rgb(54, 54, 54)", 
                  borderBottom: "3px solid rgb(54, 54, 54)", 
                  borderRight: "3px solid rgb(54, 54, 54)" 
                }
                  // borderLeft: "3px solid rgb(54, 54, 54)"
                } />
            </Col>
            <Col size="md-8">
              <div className="p-a">
                <p>
                  Our care kit is intended to provide moms with the
                  sustenance and supplies they need to ensure their own self
                  care during this critical time in their lives when time
                  for themselves is limited. 
                </p>
                <p>
                  Through handy, healthy snacks
                  and other practical essentials, our kit is intended to
                  surround the mother with must-have items and helpful
                  information to help navigate the critical 4th trimester.
                </p>
                <p>Below are the items included in our care kit.</p>
                <FlatButton 
                  label="Add to cart" 
                  primary={true} 
                  className="snipcart-add-item" 
                  data-item-id="1" 
                  data-item-name="Signature Care Kit" 
                  data-item-price="45" 
                  data-item-weight="5" 
                  data-item-url="/kit" 
                  data-item-description="A selection of must-have items for new moms" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="md-12 sm-12">
              {this.state.items.length ? <div>
                  {this.state.items.map(item => (
                    <Col size="md-4" key={item.itemID}>
                      <CardExample
                        itemID={item.itemID}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                      />
                    </Col>
                  ))}
                </div> : <h3>No Results to Display</h3>}
            </Col>
          </Row>
        </div>
      </Container>;
  }
}

export default Items;