import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class DialogExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = { open: false, title: props.title };
  }

  // state = {
  //   open: false,
  //   title: props.title
  // };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div onClick={this.handleOpen}>
        {/* <FlatButton label="Details" onClick={this.handleOpen} /> */}
        <Dialog
          title={this.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          
        >
        {/* {props.title} */}
        </Dialog>
      </div>
    );
  }
}