import React, { Component } from 'react'

// Material UI imports
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class GroupsDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const dialogActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.props.close.bind(this)}
      />,
      <FlatButton
        label="Save Changes"
        style={{color: "#02C386"}}
        primary={true}
        onTouchTap={this.props.confirm.bind(this)}
      />,
    ]

    return (
      <Dialog
        title="Group"
        actions={dialogActions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.close.bind(this)}
        >
        Groups select here
      </Dialog>
    );
  }

}
