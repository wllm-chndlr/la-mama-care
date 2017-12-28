import React from "react";
import Paper from "material-ui/Paper";

const style = {
  height: 100,
  width: "50%",
  margin: 20,
  textAlign: "center",
  display: "inline-block"
  // background: "grey"
};

const PaperExampleSimple = () => (
  <div>
    {/* <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={4} /> */}
    <Paper style={style} zDepth={5} >
    You've got this, superhero.
    </Paper>
  </div>
);

export default PaperExampleSimple;
