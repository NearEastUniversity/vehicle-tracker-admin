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
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Material UI Styles
const muiStyle = {
  iconEditButton: {
    color: '#039BE5',
  },
  iconUnassignButton: {
    color: '#FF0000',
  },
  iconButton: {
    zIndex: '9999 !important',
  }
}

// Component Style
import style from './style'

const vehicles = [
  <MenuItem key={1} value={1} primaryText="Vehicles"  />,
  <MenuItem key={2} value={2} primaryText="Vehicles1" />,
  <MenuItem key={3} value={3} primaryText="Vehicles2" />,
  <MenuItem key={4} value={4} primaryText="Vehicles3" />,
  <MenuItem key={5} value={5} primaryText="Vehicles4" />,
]

const agents = [
  <MenuItem key={1} value={1} primaryText="Agents"  />,
  <MenuItem key={2} value={2} primaryText="Agents1" />,
  <MenuItem key={3} value={3} primaryText="Agents2" />,
  <MenuItem key={4} value={4} primaryText="Agents3" />,
  <MenuItem key={5} value={5} primaryText="Agents4" />,
]

export default class ConnectionsTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogEdit: false,
      dialogAlert: false,
      vehicleValue: 1,
      agentValue: 1
    }
  }

  vehicleChange(event, index, vehicleValue) {
    this.setState({vehicleValue})
  }

  agentChange(event, index, agentValue) {
    this.setState({agentValue})
  }

  dialogEdit() {
    this.setState({dialogEdit: true})
	}

  dialogAlert() {
    this.setState({dialogAlert: true})
	}

	dialogClose() {
		this.setState({dialogEdit: false, dialogAlert: false})
	}

  render() {

    const editActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Edit"
        style={{color: "#039BE5"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
    ]

    const alertActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Unassign"
        style={{color: "#ff0000"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
    ]

    return (
      <div className={style.app}>
          {/* Table with conections */}
          <Table
            selectable={false}>
             <TableHeader
               displaySelectAll={false}
               adjustForCheckbox={false}>
               <TableRow>
                 <TableHeaderColumn>Agent ID</TableHeaderColumn>
                 <TableHeaderColumn>Vehicle ID</TableHeaderColumn>
                 <TableHeaderColumn>Options</TableHeaderColumn>
               </TableRow>
             </TableHeader>
             <TableBody
               displayRowCheckbox={false}>
               <TableRow>
                 <TableRowColumn>123456</TableRowColumn>
                 <TableRowColumn>AD 234</TableRowColumn>
                 <TableRowColumn>
                   <IconButton
                     onTouchTap={this.dialogEdit.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconEditButton}
                     tooltip="Edit"
                     touch={true}>
                       <ImageEdit/>
                   </IconButton>
                   <IconButton
                     onTouchTap={this.dialogAlert.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconUnassignButton}
                     tooltip="Unassign"
                     touch={true}>
                       <ActionDelete/>
                   </IconButton>
                 </TableRowColumn>
               </TableRow>
               <TableRow>
                 <TableRowColumn>123456</TableRowColumn>
                 <TableRowColumn>AD 234</TableRowColumn>
                 <TableRowColumn>
                   <IconButton
                     onTouchTap={this.dialogEdit.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconEditButton}
                     tooltip="Edit"
                     touch={true}>
                       <ImageEdit/>
                   </IconButton>
                   <IconButton
                     onTouchTap={this.dialogAlert.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconUnassignButton}
                     tooltip="Unassign"
                     touch={true}>
                       <ActionDelete/>
                   </IconButton>
                 </TableRowColumn>
               </TableRow>
               <TableRow>
                 <TableRowColumn>123456</TableRowColumn>
                 <TableRowColumn>AD 234</TableRowColumn>
                 <TableRowColumn>
                   <IconButton
                     onTouchTap={this.dialogEdit.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconEditButton}
                     tooltip="Edit"
                     touch={true}>
                       <ImageEdit/>
                   </IconButton>
                   <IconButton
                     onTouchTap={this.dialogAlert.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconUnassignButton}
                     tooltip="Unassign"
                     touch={true}>
                       <ActionDelete/>
                   </IconButton>
                 </TableRowColumn>
               </TableRow>
               <TableRow>
                 <TableRowColumn>123456</TableRowColumn>
                 <TableRowColumn>AD 234</TableRowColumn>
                 <TableRowColumn>
                   <IconButton
                     onTouchTap={this.dialogEdit.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconEditButton}
                     tooltip="Edit"
                     touch={true}>
                       <ImageEdit/>
                   </IconButton>
                   <IconButton
                     onTouchTap={this.dialogAlert.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconUnassignButton}
                     tooltip="Unassign"
                     touch={true}>
                       <ActionDelete/>
                   </IconButton>
                 </TableRowColumn>
               </TableRow>
               <TableRow>
                 <TableRowColumn>123456</TableRowColumn>
                 <TableRowColumn>AD 234</TableRowColumn>
                 <TableRowColumn>
                   <IconButton
                     onTouchTap={this.dialogEdit.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconEditButton}
                     tooltip="Edit"
                     touch={true}>
                       <ImageEdit/>
                   </IconButton>
                   <IconButton
                     onTouchTap={this.dialogAlert.bind(this)}
                     style={muiStyle.iconButton}
                     iconStyle={muiStyle.iconUnassignButton}
                     tooltip="Unassign"
                     touch={true}>
                       <ActionDelete/>
                   </IconButton>
                 </TableRowColumn>
               </TableRow>
             </TableBody>
           </Table>

         {/* Edit Connection dialog */}
         <Dialog
          title="Edit Connection"
          actions={editActions}
          modal={false}
          open={this.state.dialogEdit}
          onRequestClose={this.dialogClose.bind(this)}>
            <div className={style.dropDown}>
              <SelectField
                floatingLabelText="Select Agent"
                floatingLabelFixed={true}
                floatingLabelStyle={muiStyle.floatingLabelStyle}
                maxHeight={300}
                value={this.state.agentValue}
                onChange={this.agentChange.bind(this)}>
                {agents}
              </SelectField>
            </div>

            <div className={style.dropDown}>
              <SelectField
                floatingLabelText="Select vehicle"
                floatingLabelFixed={true}
                floatingLabelStyle={muiStyle.floatingLabelStyle}
                maxHeight={300}
                value={this.state.vehicleValue}
                onChange={this.vehicleChange.bind(this)}>
                {vehicles}
              </SelectField>
            </div>
        </Dialog>

        {/* Unassign Connection dialog */}
        <Dialog
         title="Unassign Connection"
         actions={alertActions}
         modal={false}
         open={this.state.dialogAlert}
         onRequestClose={this.dialogClose.bind(this)}>
         Do you realy want to unassign agent and vehicle connection?
       </Dialog>

     </div>
    )
  }
}
