import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// Material UI Styles
const muiStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px',
  },
  createButtonStyle:{
    margin: '80px 0px',
    minWidth: '116px',
  }
}

// Component Style
import style from './style'

import {createVehicle, getVehicleTypes, getVehicleGroups, getAgents} from './actions'

export default class CreateVehicleForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      plateIdInput: "",
      vehicleTypeSelect: "",
      vehicleTypeList: [],
      vehicleGroupSelect: "",
      vehicleGroupList: [],
      agentListSelect: "",
      agentsList:[],
      inputError: ""
    }
  }

  componentWillMount() {
    this.updateVehicleTypes()
    this.updateVehicleGroups()
    this.updateAgentSelectList()
  }

  updateVehicleTypes(){
    getVehicleTypes((data) => {
      this.setState({
        vehicleTypeList: data,
      });
    }, (error) => {
      console.error(error);
    })
  }

  updateVehicleGroups(){
    getVehicleGroups((data) => {
      this.setState({
        vehicleGroupList: data,
      });
    }, (error) => {
      console.error(error);
    })
  }

  updateAgentSelectList(){
    getAgents((data) => {
      this.setState({
        agentsList: data,
      });
    }, (error) => {
      console.error(error);
    })
  }

  // Handle Inputs
  handlePlateIdChange(event){
    this.setState({
      plateIdInput: event.target.value
    })
  }

  handleVehicleTypeChange(event, key, value){
    this.setState({
      vehicleTypeSelect: value
    })
  }

  handleVehicleGroupChange(event, key, value){
    this.setState({
      vehicleGroupSelect: value
    })
  }

  handleAgentListChange(event, key, value){
    this.setState({
      agentListSelect: value
    })
  }

  handleGroupChange(event){
    this.setState({
      groupInput: event.target.value
    })
  }

  handleCreateVehicle(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    let plateId = this.state.plateIdInput
    let vehicleType = this.state.vehicleTypeSelect
    let agentUuid = this.state.agentListSelect
    let groupID = this.state.vehicleGroupSelect

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
    		if (arr[i] == null || arr[i] == "") {
          return false
    		}
      }
      return true
    }

    let reqInputs = [plateId, vehicleType];

    if (validateForm(reqInputs)) {

      let formData = {
        plate_id: plateId,
        type: vehicleType,
        agent_uuid: agentUuid,
        // groups: groupID,
      }

      createVehicle(formData, (res) => {
        this.setState({
          plateIdInput: "",
          vehicleTypeSelect: "",
          vehicleGroupSelect: "",
          agentListSelect: "",
          inputError: ""
        })
        this.props.vehicleCreated(res)
      }, (err) => {
        console.error(err);
      })

      } else {
      this.setState({
        inputError: "This field is required."
      });
    }
  }

  render() {
    return (
      <div>
        {/* Create new Vehicle Form */}
        <form
          id="createVehicle"
          onSubmit={this.handleCreateVehicle.bind(this)}>
          <div style={{display: 'inline-flex'}}>
            <div style={{maxWidth: '600px'}}>
            <div className={style.container}>
              <TextField
                value={this.state.plateIdInput}
                onChange={this.handlePlateIdChange.bind(this)}
                hintText="AA535"
                floatingLabelText="Plate ID"
                errorText={this.state.inputError}
                floatingLabelStyle={muiStyle.floatingLabelStyle}
                style={muiStyle.textFieldStyle}/>

              <SelectField
                className={style.selectField}
                floatingLabelText="Type"
                errorText={this.state.inputError}
                value={this.state.vehicleTypeSelect}
                onChange={(event, key, value) => {this.handleVehicleTypeChange(event, key, value)}}>
                {this.state.vehicleTypeList.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type} primaryText={type} />
                  )
                })}
              </SelectField>

            </div>
            <div className={style.container}>
              <SelectField
                className={style.selectField}
                floatingLabelText="Agent (optional)"
                value={this.state.agentListSelect}
                onChange={(event, key, value) => {this.handleAgentListChange(event, key, value)}}>
                {this.state.agentsList.map((agent, index) => {
                  return (
                    <MenuItem key={index} value={agent.uuid} primaryText={agent.uuid} />
                  )
                })}
              </SelectField>

              <SelectField
                className={style.selectField}
                multiple={true}
                floatingLabelText="Group (optional)"
                value={this.state.vehicleGroupSelect}
                onChange={(event, key, value) => {this.handleVehicleGroupChange(event, key, value)}}>
                {this.state.vehicleGroupList.map((groups, index) => {
                  return (
                    <MenuItem
                      key={index} value={groups.id} primaryText={groups.name} />
                  )
                })}
              </SelectField>

            </div>
          </div>

          <RaisedButton
            type="submit"
            label="Create"
            icon={<ContentAdd/>}
            labelColor="#fff"
            backgroundColor="#039BE5"
            style={muiStyle.createButtonStyle}
          />
          </div>
        </form>
     </div>
    )
  }
}
