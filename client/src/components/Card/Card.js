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
import DialogExampleSimple from "../../components/Dialog";
import "./Card.css";

const CardExample = props => (
  <Card
    style={{
      border: "3px solid rgb(90,90,90)",
      margin: "15%",
      maxHeight: "20%"
    }}
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
      actAsExpander={false}
      overlay={
        <CardTitle
          title={props.title}
          // subtitle="Overlay subtitle"
          actAsExpander={false}
          titleStyle={{ fontFamily: "'Poppins'" }}
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

    {/* <CardText
      expandable={false}
      actAsExpander={false}
      style={{ fontSize: "18px", color: "rgb(90,90,90)" }}
    >
      {props.description}
    </CardText> */}

    {/* <CardActions>

      <Row>

        <Col size="md-6">

          <DialogExampleSimple
            title={props.title}
          />

        </Col>

        <Col size="md-6">



        </Col>

      </Row>

    </CardActions> */}
    <DialogExampleSimple />
  </Card>
);

export default CardExample;