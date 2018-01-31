import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { Col, Row, Container } from "../../components/Grid";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import ModalModalExample from "../../components/Modal";
import DialogExampleSimple from "../../components/Dialog";
import "./Card.css";

const CardExample = props => (

  <Card
    style={{
      border: "5px solid #444",
      // margin: "0px 20px 90px 20px"
      margin: "10%",
      maxHeight: "600px"
    }}
    className="cardpack"
  >
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      // avatar="images/jsa-128.jpg"
    /> */}
    <CardMedia
      actAsExpander={true}
      overlay={
        <CardTitle
          title={props.title}
          // subtitle="Overlay subtitle"
          actAsExpander={true}
          titleStyle={{ fontFamily: "'Bangers'" }}
        />
      }
    >
      <img src={props.image} alt={props.title} />
    </CardMedia>

    {/* <CardTitle
      id="card-title"
      showExpandableButton={false}
      actAsExpander={true}
      titleStyle={{ color: "rgb(0, 48, 87)", margin: "2rem" }}
      // title={props.title}
      // subtitle={props.price}
      // subtitle={props.description}
      subtitleStyle={{
        fontSize: "16px",
        color: "rgb(0, 125, 138)",
        margin: "2rem"
      }}
    /> */}
    
    <CardText
      expandable={true}
      actAsExpander={true}
      style={{ fontSize: "18px", color: "rgb(90,90,90)" }}
    >
      {props.description}
      {/* <div style={{ marginLeft: "2rem" }}>${props.price}</div>
      <ul>
        <li className="kit-items">Item1</li>
        <li className="kit-items">Item2</li>
        <li className="kit-items">Item3</li>
      </ul> */}

    </CardText>

    {/* <CardActions>

      <Row>

        <Col size="md-6">

          <DialogExampleSimple
            title={props.title}
          />

        </Col>

        <Col size="md-6">

          <FlatButton
            label="Add to cart"
            // style={{ margin: "10px", paddingBottom: "10px" }}
            className="snipcart-add-item"
            data-item-id={props.itemID}
            data-item-name={props.title}
            data-item-price={props.price}
            data-item-weight="5"
            data-item-url="/boxes"
            data-item-description={props.description}
          />

        </Col>

      </Row>

    </CardActions> */}

  </Card>
);

export default CardExample;