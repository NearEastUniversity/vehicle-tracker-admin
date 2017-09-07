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
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Material UI Styles
const materialuiCreateAgentStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px 40px 20px',
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

export default class CreateAgentContainer extends React.Component {

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
          </TableBody>
        </Table>

        {/* Delete Agent Dialog */}
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
