import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import ModalModalExample from "../../components/Modal";
import "./Card.css";

const CardExample = props => (
  <Card
    style={{
      border: "2px solid rgb(182, 207, 208)",
      margin: "0px 20px 90px 20px"
    }}
    className="cardpack"
  >
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    /> */}
    <CardMedia
      actAsExpander={true}
      // overlay={
      //   <CardTitle
      //     title="Overlay title"
      //     subtitle="Overlay subtitle"
      //     actAsExpander={true}
      //   />
      // }
    >
      <img src={props.image} alt={props.title} />
    </CardMedia>
    <CardTitle
      id="card-title"
      showExpandableButton={true}
      actAsExpander={true}
      titleStyle={{ color: "rgb(0, 48, 87)", margin: "2rem" }}
      title={props.title}
      // subtitle={props.price}
      subtitle={props.description}
      subtitleStyle={{
        fontSize: "18px",
        color: "rgb(0, 125, 138)",
        margin: "2rem"
      }}
    />
    <CardText
      expandable={true}
      actAsExpander={true}
      style={{ fontSize: "18px", color: "rgb(0, 125, 138)" }}
    >
      {/* {props.description} */}
      <div style={{ marginLeft: "2rem" }}>${props.price}</div>
      <ul>
        <li className="kit-items">Item1</li>
        <li className="kit-items">Item2</li>
        <li className="kit-items">Item3</li>
      </ul>
    </CardText>
    <ModalModalExample />
    <CardActions>
      <FlatButton
        label="Add to cart"
        style={{ margin: "10px", paddingBottom: "10px" }}
      />
    </CardActions>
  </Card>
);

export default CardExample;