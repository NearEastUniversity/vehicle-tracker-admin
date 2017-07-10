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
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Material UI Styles
const materialuiCreateUserStyle = {
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

// Component Style
import style from './style'

// Component Actions
import {getUsers} from './actions'


export default class CreateUser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogAlert: false,
      users: []
    }
  }

  componentWillMount() {
    this.updateUsers()
  }

  dialogAlert() {
    this.setState({dialogAlert: true})
	}

	dialogClose() {
		this.setState({dialogAlert: false})
	}

  updateUsers() {
    let that = this
    getUsers((data) => {
      that.setState({
        users: data,
      });
    }, (res) => {
      console.log("error: " + res);
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
        onTouchTap={this.dialogClose.bind(this)}
      />,
    ]

    return (
      <div className={style.app}>
        <div className={style.connections}>
          <Paper zDepth={1} style={materialuiCreateUserStyle.paper}>
            <h3>Create User</h3>
            {/* Create new User TextFields */}
            <TextField
              type="email"
              hintText="example@example.com"
              floatingLabelText="Email"
              floatingLabelStyle={materialuiCreateUserStyle.floatingLabelStyle}
              style={materialuiCreateUserStyle.textFieldStyle}/>
            <TextField
              hintText="set a password"
              floatingLabelText="Password"
              floatingLabelStyle={materialuiCreateUserStyle.floatingLabelStyle}
              style={materialuiCreateUserStyle.textFieldStyle}/>
            <RaisedButton
              label="Create"
              icon={<ContentAdd/>}
              labelColor="#fff"
              backgroundColor="#039BE5"
              style={materialuiCreateUserStyle.createButtonStyle}/>

            {/* Table with created Vechicles */}
            <Table
              selectable={false}>
               <TableHeader
                 displaySelectAll={false}
                 adjustForCheckbox={false}>
                 <TableRow>
                   <TableHeaderColumn>Email</TableHeaderColumn>
                   <TableHeaderColumn>Options</TableHeaderColumn>
                 </TableRow>
               </TableHeader>
               <TableBody
                 displayRowCheckbox={false}>

                 {/* Maps through the users state to render user rows */}
                 {this.state.users.map((user, index) => {
                   return (
                     <TableRow key={index}>
                       <TableRowColumn>{user.email && user.email}</TableRowColumn>
                       <TableRowColumn>
                         <IconButton
                           onTouchTap={this.dialogAlert.bind(this)}
                           style={materialuiCreateUserStyle.iconButton}
                           iconStyle={materialuiCreateUserStyle.iconDeleteButton}
                           tooltip="Delete"
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

         <Dialog
          title="Delete User"
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
          onRequestClose={this.dialogClose.bind(this)}>
          Do you realy want to delete user?
        </Dialog>

     </div>
    )
  }
}
