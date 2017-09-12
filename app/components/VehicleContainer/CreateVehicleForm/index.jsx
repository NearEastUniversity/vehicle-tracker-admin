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

import {createVehicle, getVehicleTypes, getAgents} from './actions'

export default class CreateVehicleForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      plateIdInput: "",
      vehicleTypeSelect: "",
      vehicleTypeList: [],
      agentListSelect: "",
      agentsList:[],
      groupNumInput: "",
      inputError: ""
    }
  }

  componentWillMount() {
    this.updateVehicleTypes()
    this.updateAgentSelectList()
  }

  updateAgentSelectList(){
    getAgents((data) => {
      if (data.length = 0) {
        this.setState({
          agentsList: data,
        });
      } else {
        this.setState({
          agentsList: ["---"],
        });
      }

    }, (error) => {
      console.error(error);
    })
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

  handleAgentListChange(event, key, value){
    this.setState({
      vehicleTypeSelect: value
    })
  }

  handleGroupNumChange(event){
    this.setState({
      groupNumInput: event.target.value
    })
  }

  handleCreateVehicle(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    // let agentUuid = this.state.agentListSelect
    let vehicleType = this.state.vehicleTypeSelect
    let plateId = this.state.plateIdInput
    let groupNum = this.state.groupNumInput

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
        type: vehicleType
      }

      createVehicle(formData, (res) => {
        this.setState({
          plateIdInput: "",
          vehicleTypeSelect: "",
          agentListSelect: "",
          groupNumInput: ""
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
          onSubmit={this.handleCreateVehicle.bind(this)}
          >
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
                style={muiStyle.textFieldStyle}
              />

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
                floatingLabelText="Agent"
                value={this.state.agentListSelect}
                onChange={(event, key, value) => {this.handleAgentListChange(event, key, value)}}>
                {this.state.agentsList.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type} primaryText={type} />
                  )
                })}
              </SelectField>

              <TextField
                value={this.state.groupNumInput}
                onChange={this.handleGroupNumChange.bind(this)}
                floatingLabelText="Group Number (optional)"
                floatingLabelStyle={muiStyle.floatingLabelStyle}
                style={muiStyle.textFieldStyle}
              />

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
