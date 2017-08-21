import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

// Component Actions
import {getUsers, createUser} from './actions'

export default class TestComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      emailInput: "",
      passwordInput: ""
    }
  }

  componentWillMount() {
    this.updateUsers()
  }

  updateUsers() {
    getUsers((data) => {
      this.setState({
        users: data,
      });
    },
    // Log's error
    (response) => {
      console.log("error: " + response);
    })
  }

  // Listen's for change input email value
  handleEmailChange(event){
    this.setState({
      emailInput: event.target.value
    })
  }

  // Listen's for change input password value
  handlePasswordChange(event){
    this.setState({
      passwordInput: event.target.value
    })
  }

  handleCreateUser(event){
    // Prevents browser's default action on submitting form
    event.preventDefault();

    const email = this.state.emailInput;
    const password = this.state.passwordInput;

    // Create's user and push'es it
    createUser(email, password, (response) => {
      let newUser = response
      let newUsers = this.state.users.slice()
      newUsers.push(newUser)
      this.setState({
        users: newUsers,
        emailInput: "",
        passwordInput: ""
      })
    },
    // Log's error
    (response) => {
      console.log(`error: ${response}`);
    })
  }


  render() {
    return (
    <div>
      <form id="createUser" onSubmit={this.handleCreateUser.bind(this)}>
        <TextField
          value={this.state.emailInput}
          onChange={this.handleEmailChange.bind(this)}
          type="email"
          hintText="example@example.com"
          floatingLabelText="Email"
        />
        <TextField
          value={this.state.passwordInput}
          onChange={this.handlePasswordChange.bind(this)}
          hintText="set a password"
          floatingLabelText="Password"
        />
        <RaisedButton
          type="submit"
          label="Create"
        />
      </form>

      <Table style={{width: '50%', margin: 'auto'}}>
         <TableHeader
           displaySelectAll={false}
           adjustForCheckbox={false}>
           <TableRow>
             <TableHeaderColumn>Email</TableHeaderColumn>
           </TableRow>
         </TableHeader>

         <TableBody>
           {this.state.users.map((user, index) => {
             return (
               <TableRow key={index}>
                 <TableRowColumn>{user.email}</TableRowColumn>
               </TableRow>
             )
           })}
         </TableBody>
       </Table>

    </div>
    )
  }
}
