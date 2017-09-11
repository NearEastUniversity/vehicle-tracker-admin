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
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Material UI Styles
const muiStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal',
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

// Component Actions
import {deleteVehicle} from './actions'

export default class VehiclesTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleList: props.vehicleList,
      dialogAlert: false,
      deleteVehicle: {}
    }
  }

  dialogAlert() {
    this.setState({dialogAlert: true})
	}

	dialogClose() {
		this.setState({dialogAlert: false})
	}

  handleDeleteVehicle(vehicle) {
    this.setState({
      dialogAlert: true,
      deleteVehicle: vehicle
    })
  }

  confirmDeleteVehicle(){
    deleteVehicle(this.state.deleteVehicle.plate_id, (res) => {

      this.setState({
        dialogAlert: false,
        deleteVehicle: {}
      })
      this.props.changeOnVehicleList()
    }, (res) => {
      console.log(`delete vehicle error: ${res}`);
    })
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
        onTouchTap={this.confirmDeleteVehicle.bind(this)}
      />,
    ]

    return (
      <div className={style.app}>
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
             {this.props.vehicleList.map((vehicle, index) => {
               return (
                 <TableRow key={index}>
                   <TableRowColumn>{vehicle.plate_id && vehicle.plate_id}</TableRowColumn>
                   <TableRowColumn>{vehicle.type && vehicle.type}</TableRowColumn>
                   <TableRowColumn>{vehicle.groups || ""}</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.handleDeleteVehicle.bind(this, vehicle)}
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

        {/* Delete Vehicle Dialog */}
        <Dialog
         className={style.dialog}
         title="Delete Vehicle"
         actions={alertActions}
         modal={false}
         open={this.state.dialogAlert}
         onRequestClose={this.dialogClose.bind(this)}>
         Do you realy want to delete
         <span className={style.highlight}>
           {this.state.deleteVehicle.plate_id}
         </span>
         plate ID vehicle?
       </Dialog>
     </div>
    )
  }
}
