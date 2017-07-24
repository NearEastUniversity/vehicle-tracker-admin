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
import {getUsers, createUser} from './actions'


export default class CreateUser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogAlert: false,
      users: [],
      emailInput: "",
      passwordInput: ""
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
    getUsers((data) => {
      this.setState({
        users: data,
      });
    }, (res) => {
      console.log("error: " + res);
    })
  }

  handleEmailChange(event){
    this.setState({
      emailInput: event.target.value
    })
  }

  handlePasswordChange(event){
    this.setState({
      passwordInput: event.target.value
    })
  }

  handleCreateUser(event){
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    const email = this.state.emailInput;
    const password = this.state.passwordInput;

    console.log(email, password);

    createUser(email, password, (res) => {
      let newUser = res
      let newUsers = this.state.users.slice()
      newUsers.push(newUser)
      this.setState({
        users: newUsers
      })
    }, (res) => {
      console.log(`error on creating user: ${res}`);
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
            <form id="createUser" onSubmit={this.handleCreateUser.bind(this)}>
              <TextField
                value={this.state.emailInput}
                onChange={this.handleEmailChange.bind(this)}
                type="email"
                hintText="example@example.com"
                floatingLabelText="Email"
                floatingLabelStyle={materialuiCreateUserStyle.floatingLabelStyle}
                style={materialuiCreateUserStyle.textFieldStyle}/>
              <TextField
                value={this.state.passwordInput}
                onChange={this.handlePasswordChange.bind(this)}
                hintText="set a password"
                floatingLabelText="Password"
                floatingLabelStyle={materialuiCreateUserStyle.floatingLabelStyle}
                style={materialuiCreateUserStyle.textFieldStyle}/>
              <RaisedButton
                type="submit"
                label="Create"
                icon={<ContentAdd/>}
                labelColor="#fff"
                backgroundColor="#039BE5"
                style={materialuiCreateUserStyle.createButtonStyle}/>
            </form>

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

         {/* Delete User Dialog */}
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
