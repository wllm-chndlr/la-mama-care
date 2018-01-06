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
    // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src={props.image} alt={props.title} />
    </CardMedia>
    <CardTitle 
      id="card-title"
      showExpandableButton={true}
      style={{ color: "rgb(224, 60, 49)" }}
      title={props.title}
      subtitle={props.price}
    />
    <CardText style={{ fontSize: "18px", color: "rgb(0, 125, 138)" }}>
      {props.description}
    </CardText>
    <CardActions>
      <FlatButton label="Add" />
      {/* <FlatButton label="Remove" /> */}
    </CardActions>
  </Card>
);

export default CardExample;