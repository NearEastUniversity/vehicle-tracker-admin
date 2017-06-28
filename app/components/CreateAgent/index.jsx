import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionDelete from 'material-ui/svg-icons/action/delete'

import style from './style'

const materialuiCreateAgentStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  },
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px 40px 20px',
  },
  createButtonStyle:{
    margin: '0px 20px 40px 20px',
  },
  iconDeleteButton: {
    color: '#FF0000',
  },
  iconButton: {
    zIndex: '9999 !important',
  }
}

export default class CreateAgent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogAlert: false
    }
  }

  dialogAlert() {
    this.setState({dialogAlert: true})
	}

	dialogClose() {
		this.setState({dialogAlert: false})
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
          <Paper zDepth={1} style={materialuiCreateAgentStyle.paper}>
            <h3>Create Agent</h3>

            {/* Create new Agent TextFields */}
            <TextField
              hintText="Example Label"
              floatingLabelText="Agent Label"
              floatingLabelStyle={materialuiCreateAgentStyle.floatingLabelStyle}
              style={materialuiCreateAgentStyle.textFieldStyle}/>
            <RaisedButton
              label="Create"
              icon={<ContentAdd/>}
              labelColor="#fff"
              backgroundColor="#039BE5"
              style={materialuiCreateAgentStyle.createButtonStyle}/>

            {/* Table with created Vechicles */}
            <Table
              selectable={false}>
               <TableHeader
                 displaySelectAll={false}
                 adjustForCheckbox={false}>
                 <TableRow>
                   <TableHeaderColumn>Agent ID</TableHeaderColumn>
                   <TableHeaderColumn>Label</TableHeaderColumn>
                   <TableHeaderColumn>Options</TableHeaderColumn>
                 </TableRow>
               </TableHeader>
               <TableBody
                 displayRowCheckbox={false}>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>Example Label</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.dialogAlert.bind(this)}
                       style={materialuiCreateAgentStyle.iconButton}
                       iconStyle={materialuiCreateAgentStyle.iconDeleteButton}
                       tooltip="Delete"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>Example Label</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.dialogAlert.bind(this)}
                       style={materialuiCreateAgentStyle.iconButton}
                       iconStyle={materialuiCreateAgentStyle.iconDeleteButton}
                       tooltip="Delete"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>Example Label</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.dialogAlert.bind(this)}
                       style={materialuiCreateAgentStyle.iconButton}
                       iconStyle={materialuiCreateAgentStyle.iconDeleteButton}
                       tooltip="Delete"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>Example Label</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.dialogAlert.bind(this)}
                       style={materialuiCreateAgentStyle.iconButton}
                       iconStyle={materialuiCreateAgentStyle.iconDeleteButton}
                       tooltip="Delete"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>Example Label</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.dialogAlert.bind(this)}
                       style={materialuiCreateAgentStyle.iconButton}
                       iconStyle={materialuiCreateAgentStyle.iconDeleteButton}
                       tooltip="Delete"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
               </TableBody>
             </Table>
           </Paper>
         </div>

        <Dialog
         title="Delete Agent"
         actions={alertActions}
         modal={false}
         open={this.state.dialogAlert}
         onRequestClose={this.dialogClose.bind(this)}>
         Do you realy want to delete this agent?
       </Dialog>

     </div>
    )
  }
}
