import React from "react";
import {
  Card,
  // CardActions,
  // CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";
// import RaisedButton from "material-ui/RaisedButton";
import "./Card.css";

const CardExample = props => (
  <Card
    style={{
      border: "3px solid rgb(90,90,90)",
      margin: "10%",
      // minHeight: "20%",
      maxHeight: "100%"
    }}
    containerStyle={{maxHeight: "100%"}}
    // data-aos={"zoom-in"}
    // data-aos-offset={500}
    onClick={this.handleOpen}
  >
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      // avatar="images/jsa-128.jpg"
    /> */}
    <CardMedia
      actAsExpander={true}
      // overlay={
      //   <CardTitle
      //     title={props.title}
      //     // subtitle="Overlay subtitle"
      //     actAsExpander={false}
      //     titleStyle={{ fontFamily: "'Poppins'" }}
      //   />
      // }
    >
      <img src={props.image} alt={props.title} />
    </CardMedia>

    <CardTitle
      id="card-title"
      showExpandableButton={false}
      actAsExpander={true}
      titleStyle={{
        color: "rgb(0, 125, 138)"
        // margin: "2rem"
      }}
      title={props.title}
      // subtitle={props.price}
      // subtitle={props.description}
      subtitleStyle={{
        fontSize: "2rem",
        color: "rgb(0, 125, 138)"
      }}
      data-aos={"zoom-in"}
      // data-aos-offset={500}
    />

    <CardText
      expandable={true}
      actAsExpander={true}
      style={{ fontSize: "18px", color: "rgb(90,90,90)" }}
    >
      {props.description}
    </CardText>
  </Card>
);

export default CardExample;