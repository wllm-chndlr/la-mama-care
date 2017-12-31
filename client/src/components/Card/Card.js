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

const CardExample = () => (
  <Card style={{ border: "3px solid rgb(182, 207, 208)" }}>
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    /> */}
    <CardMedia
      // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img
        src="https://www.hydroflask.com/media/catalog/product/cache/1/image/480x/0dc2d03fe217f8c83829496872af24a0/h/y/hydro-flask-stainless-steel-vacuum-insulated-water-bottle-40-oz-wide-mouth-straw-lid-kiwi.jpg"
        alt=""
        // style={{ width: "50px", height: "175px" }}
      />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    {/* <CardText style={{color: "#444"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
      pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
      interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
      dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText> */}
    <CardActions>
      <FlatButton label="Add" />
      {/* <FlatButton label="Remove" /> */}
    </CardActions>
  </Card>
);

export default CardExample;
