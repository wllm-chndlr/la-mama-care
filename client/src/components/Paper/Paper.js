import React from "react";
import Paper from "material-ui/Paper";

const style = {
  height: "auto",
  // padding: "3%",
  width: "auto",
  // margin: "5%",
  // textAlign: "center",
  display: "inline-block",
  background: "url('../../images/stardust.png')",
  // border: "5px solid #444"
};

const PaperExampleSimple = props => (
  <div>
    {/* <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} /> */}
    <Paper style={style} zDepth={5} rounded={false}>
    {props.children}
    </Paper>
    {/* <Paper style={style} zDepth={5} /> */}
  </div>
);

export default PaperExampleSimple;
