import React from 'react'

// Material UI imports
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  },
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px',
  },
  createButtonStyle:{
    margin: '80px 0px',
    minWidth: '116px',
  },
  iconDeleteButton: {
    color: '#FF0000',
  },
  iconButton: {
    zIndex: '9999 !important',
  }
}

// Component Style
import style from './style'

import { createVehicle, getVehicles, getVehicleTypes, getAgents } from './actions'


export default class CreateVehicle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogAlert: false,
      agentListSelect: "",
      vehicleTypeSelect: "",
      vehicleTypeList: [],
      plateIdInput: "",
      groupNumInput: "",
      inputError: "",
      vehicleList: [],
      agentsList:[]
    }
  }


  componentWillMount() {
    this.updateVehicleList()
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


  updateVehicleList(){
    getVehicles((data) => {
      this.setState({
        vehicleList: data
      });
    }, (error) => {
      console.error(error);
    })
  }


  dialogAlert() {
    this.setState({dialogAlert: true})
	}

	dialogClose() {
		this.setState({dialogAlert: false})
	}



  // handle inputs
  handleAgentListChange(event, key, value){
    this.setState({
      vehicleTypeSelect: value
    })
  }

  handleVehicleTypeChange(event, key, value){
    this.setState({
      vehicleTypeSelect: value
    })
  }

  handlePlateIdChange(event){
    this.setState({
      plateIdInput: event.target.value
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
        let newVehicle = res
        let newVehicleList = this.state.vehicleList.slice()
        newVehicleList.push(newVehicle)
        this.setState({
          vehicleList: newVehicleList,
          plateIdInput: "",
          vehicleTypeSelect: "",
          agentListSelect: "",
          groupNumInput: ""
        })
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

    const alertActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Delete"
        style={{color: "#ff0000"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
    ]


    return (
      <div className={style.app}>
        <div className={style.connections}>
          <Paper zDepth={1} style={muiStyle.paper}>
            <h3>Create Vehicle</h3>

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
                    onChange={
                      (event, key, value) => {this.handleVehicleTypeChange(event, key, value)}
                    }
                  >
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
                    onChange={
                      (event, key, value) => {this.handleAgentListChange(event, key, value)}
                    }
                  >
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

            {/* Table with created Vechicles */}
            <Table
              selectable={false}>
               <TableHeader
                 displaySelectAll={false}
                 adjustForCheckbox={false}>
                 <TableRow>
                   <TableHeaderColumn>Plate ID</TableHeaderColumn>
                   <TableHeaderColumn>Type</TableHeaderColumn>
                   <TableHeaderColumn>Groups</TableHeaderColumn>
                   <TableHeaderColumn>Options</TableHeaderColumn>
                 </TableRow>
               </TableHeader>
               <TableBody
                 displayRowCheckbox={false}>

                 {/* Maps through the vehicleList state to render vehicle rows */}
                 {this.state.vehicleList.map((vehicle, index) => {
                   return (
                     <TableRow key={index}>
                       <TableRowColumn>{vehicle.plate_id && vehicle.plate_id}</TableRowColumn>
                       <TableRowColumn>{vehicle.type && vehicle.type}</TableRowColumn>
                       <TableRowColumn>{vehicle.groups || ""}</TableRowColumn>
                       <TableRowColumn>
                         <IconButton
                           onTouchTap={this.dialogAlert.bind(this)}
                           style={muiStyle.iconButton}
                           iconStyle={muiStyle.iconDeleteButton}
                           touch={true}>
                             <ActionDelete/>
                         </IconButton>
                       </TableRowColumn>
                     </TableRow>
                   )
                 })}
               </TableBody>
             </Table>
           </Paper>
         </div>

        {/* Delete Vehicle Dialog */}
        <Dialog
         title="Delete Vehicle"
         actions={alertActions}
         modal={false}
         open={this.state.dialogAlert}
         onRequestClose={this.dialogClose.bind(this)}>
         Do you realy want to delete this vehicle?
       </Dialog>

     </div>
    )
  }
}
