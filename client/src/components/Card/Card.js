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

const CardExample = props => (
  <Card style={{ 
    border: "3px solid rgb(182, 207, 208)",
    marginBottom: "90px"
    }}>
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    /> */}
    <CardMedia
      // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img
        src={props.image}
        alt={props.title}
      />
    </CardMedia>
    <CardTitle style={{color: "#444"}} title={props.title} subtitle={props.price} />
    <CardText style={{color: "#444"}}>
      {props.description}
    </CardText>
    <CardActions>
      <FlatButton label="Add" />
      {/* <FlatButton label="Remove" /> */}
    </CardActions>
  </Card>
);

export default CardExample;
