import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// Material UI Styles
const muiStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px 40px 20px',
  },
  createButtonStyle:{
    margin: '0px 40px 20px',
  }
}

// Component Actions
import {createUser} from './actions'

// Component Style
import style from './style'

export default class CreateUserForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emailInput: "",
      passwordInput: "",
      inputError: ""
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

    let email = this.state.emailInput;
    let password = this.state.passwordInput;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
    		if (arr[i] == null || arr[i] == "") {
          return false
    		}
      }
      return true
    }

    let reqInputs = [email, password];

    if (validateForm(reqInputs)) {
      let formData = {
        email: email,
        password: password
      }

    createUser(formData, (res) => {
      this.setState({
        emailInput: "",
        passwordInput: "",
        inputError: ""
      })
      this.props.userCreated(res);
    }, (error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }
    })

    } else {
      this.setState({
        inputError: "This field is required."
      })
    }
  }

  render() {
    return (
      <div>
        {/* Create new User TForm */}
        <form
          id="createUser"
          onSubmit={this.handleCreateUser.bind(this)}
          className={style.formStyle}
          >
          <div className={style.container}>
          <TextField
            value={this.state.emailInput}
            onChange={this.handleEmailChange.bind(this)}
            type="email"
            hintText="example@example.com"
            floatingLabelText="Email"
            errorText={this.state.inputError}
            floatingLabelStyle={muiStyle.floatingLabelStyle}
            style={muiStyle.textFieldStyle}/>
          </div>
          <div className={style.container}>
            <TextField
              value={this.state.passwordInput}
              onChange={this.handlePasswordChange.bind(this)}
              type="password"
              hintText="set a password"
              floatingLabelText="Password"
              errorText={this.state.inputError}
              floatingLabelStyle={muiStyle.floatingLabelStyle}
              style={muiStyle.textFieldStyle}/>
          </div>
          <div className={style.container}>
            <RaisedButton
              type="submit"
              label="Create"
              icon={<ContentAdd/>}
              labelColor="#fff"
              backgroundColor="#039BE5"
              style={muiStyle.createButtonStyle}/>
          </div>
        </form>
     </div>
    )
  }
}
