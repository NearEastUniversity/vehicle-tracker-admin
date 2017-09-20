import React from 'react'

// Material UI imports
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
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
    color: '#FF1744',
  },
  iconButton: {
    zIndex: '9999 !important',
  }
}

// Component Style
import style from './style'

// Component Actions
import {deleteGroup} from './actions'

export default class GroupsTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      groupList: props.groupList,
      dialogAlert: false,
      deleteGroup: {}
    }
  }

  dialogAlert() {
    this.setState({dialogAlert: true})
	}

	dialogClose() {
		this.setState({dialogAlert: false})
	}

  handleDeleteGroup(group) {
    this.setState({
      dialogAlert: true,
      deleteGroup: group
    })
  }

  confirmDeleteGroup(){
    deleteGroup(this.state.deleteGroup.id, (res) => {

      this.setState({
        dialogAlert: false,
        deleteGroup: {}
      })
      this.props.changeOnGroupList()
    }, (res) => {
      console.log(`delete group error: ${res}`);
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
        onTouchTap={this.confirmDeleteGroup.bind(this)}
      />,
    ]

    return (
      <div className={style.groupsContainer}>
        <Table
          selectable={false}>
           <TableHeader
             displaySelectAll={false}
             adjustForCheckbox={false}>
             <TableRow>
               <TableHeaderColumn>Group</TableHeaderColumn>
               <TableHeaderColumn>Options</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody
             displayRowCheckbox={false}>

             {/* Maps through the Groups state to render group rows */}
             {this.props.groupList.map((group, index) => {
               return (
                 <TableRow key={index}>
                   <TableRowColumn>{group.name && group.name}</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       onTouchTap={this.handleDeleteGroup.bind(this, group)}
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

        {/* Delete Group Dialog */}
        <Dialog
          className={style.dialog}
          title="Delete User"
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
          onRequestClose={this.dialogClose.bind(this)}>
          Do you realy want to delete
          <span className={style.highlight}>
            {this.state.deleteGroup.name}
          </span>
          ?
        </Dialog>
      </div>
    )
  }
}
