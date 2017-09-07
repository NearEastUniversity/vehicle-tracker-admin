import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// Material UI Styles
const materialuiCreateUserFormStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px 40px 20px',
  },
  createButtonStyle:{
    margin: '0px 20px 40px 20px',
  }
}

// Component Actions
import {createUser} from './actions'

export default class CreateUserForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emailInput: "",
      passwordInput: ""
    }
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
      this.setState({
        emailInput: "",
        passwordInput: ""
      })
      this.props.userCreated(res)
    }, (res) => {
      console.log(`error on creating user: ${res}`);
    })
  }

  render() {
    return (
      <div>
        {/* Create new User TextFields */}
        <form id="createUser" onSubmit={this.handleCreateUser.bind(this)}>
          <TextField
            value={this.state.emailInput}
            onChange={this.handleEmailChange.bind(this)}
            type="email"
            hintText="example@example.com"
            floatingLabelText="Email"
            floatingLabelStyle={materialuiCreateUserFormStyle.floatingLabelStyle}
            style={materialuiCreateUserFormStyle.textFieldStyle}/>
          <TextField
            value={this.state.passwordInput}
            onChange={this.handlePasswordChange.bind(this)}
            hintText="set a password"
            floatingLabelText="Password"
            floatingLabelStyle={materialuiCreateUserFormStyle.floatingLabelStyle}
            style={materialuiCreateUserFormStyle.textFieldStyle}/>
          <RaisedButton
            type="submit"
            label="Create"
            icon={<ContentAdd/>}
            labelColor="#fff"
            backgroundColor="#039BE5"
            style={materialuiCreateUserFormStyle.createButtonStyle}/>
        </form>
     </div>
    )
  }
}
