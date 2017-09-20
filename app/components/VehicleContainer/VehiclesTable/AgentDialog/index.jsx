import React, { Component } from 'react'

// Material UI imports
import Dialog from 'material-ui/Dialog'
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField';

// import component actions
import {changeAgent, unassignAgent} from './actions';

// Component Style
import style from './style'

export default class AgentDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agentListSelect: "",
      hintText: "",
      errorText: ""
    };
  }

  handleAgentListChange(event, key, value){
    this.setState({
      agentListSelect: value
    })
  }

  handleClose() {
    this.setState({
      agentListSelect: "",
      hintText: "",
      errorText: ""
    });

    this.props.close()
  }

  handleSaveChanges(){
    let plate_id = this.props.editVehicle.plate_id
    let agent = {
      uuid: this.state.agentListSelect
    }

    if (agent.uuid) {
      changeAgent(plate_id, agent, (res) => {
        this.setState({
          agentListSelect: "",
          hintText: "",
          errorText: ""
        });

        this.props.confirm()
      }, (err) => {
        console.log(err);
      })
    } else {
      this.setState({
        errorText: "Please first select an agent."
      });
      return false
    }
  }

  handleUnassignAgent(){
    let plate_id = this.props.editVehicle.plate_id

    unassignAgent(plate_id, (res) => {
      this.setState({
        agentListSelect: "",
        hintText: "",
        errorText: ""
      });

      this.props.confirm()

    }, (err) => {
      console.log("err " + err);
    })
  }

  render() {

    const dialogActions = [
      <FlatButton
        label="Unassign Agent"
        style={{float: "left", color: "#FF0000"}}
        onTouchTap={this.handleUnassignAgent.bind(this)}
      />,
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Save Changes"
        style={{color: "#02C386"}}
        primary={true}
        onTouchTap={this.handleSaveChanges.bind(this)}
      />,
    ]

    return (
        <Dialog
          className={style.divStyle}
          title={`Set an agent for Vehicle ${this.props.editVehicle.plate_id}`}
          actions={dialogActions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose.bind(this)}>

            <SelectField
              className={style.selectField}
              floatingLabelText="Agent List"
              errorText={this.state.errorText}
              floatingLabelFixed={true}
              hintText = {
                this.props.editVehicle.agent ? this.props.editVehicle.agent.uuid : "Select an agent"
              }
              value={this.state.agentListSelect}
              onChange={(event, key, value) => {this.handleAgentListChange(event, key, value)}}
              >
              {this.props.agentList.map((agent, index) => {
                return (
                  <MenuItem key={index} value={agent.uuid} primaryText={agent.uuid}/>
                )
              })}
            </SelectField>

        </Dialog>
    );
  }

}
