import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI imports
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

// Material UI Styles
const muiStyle = {
	signIN: {
		padding: 30,
		width: 350,
		height: 400,
		float: 'left',
		zIndex: 5,
		position: 'relative',
	},
	blankDiv: {
		paddingTop: 100,
		marginTop: 15,
    width: 450,
    height: 370,
    backgroundColor: '#FFEF6A',
    float: 'left',
    zIndex: 1,
	},
	textFieldFirst: {
		margin: '0px 20px',
		display: 'block',
	},
	textFieldSecond: {
		margin: '-30px 20px',
		display: 'block',
	},
	floatingLabelTextStyle: {
		fontWeight: 'normal',
	},
	button: {
		marginTop: 40,
		height: 45,
	},
	buttonText: {
		fontSize: 20,
	},
	adminText: {
		color: '#4A4A4A',
	}
}

// Component Style
import style from './style'
import logo from './img/logo.svg'

// Component Actions
import {authUser, isSignedIn} from './actions'

class SignIn extends React.Component {
	constructor(props) {
		super();
		this.state = {
			email: "",
			password: ""
		}
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChange(event){
		this.setState({
			email: event.target.value
		})
	}

	handlePasswordChange(event){
		this.setState({
			password: event.target.value
		})
	}

	handleSubmit(event){
		// Call preventDefault() on the event to prevent the browser's default
		// action of submitting the form.
		event.preventDefault();

		const email = this.state.email;
		const password = this.state.password;

		console.log(email, password);

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

		authUser(email, password, () => {
				console.log("success")
				this.props.history.push('/dashboard')
		}, () => {
				console.log('error')
				this.setState({
						inputError: "Email or Password is wrong."
				})
		})

		} else {
			this.setState({
				inputError: "This field is required."
			})
		}
	}

	render() {
		return (
			<div className={style.app}>
				{isSignedIn() ? (
					<Redirect to="/"/>
				) : (
					<div className={style.container}>
						<Paper zDepth={4} style={muiStyle.signIN} >
							<h2>Sign In</h2>
							<form onSubmit={this.handleSubmit}>
							<TextField
								type="email"
								hintText="email@example.com"
								floatingLabelText="Email"
								errorText={this.state.inputError}
								value={this.state.email}
								onChange={this.handleEmailChange}
								floatingLabelStyle={muiStyle.floatingLabelTextStyle}
								style={muiStyle.textFieldFirst} />
							 <br />
							<TextField
								hintText="********"
								floatingLabelText="Password"
								type="password"
								errorText={this.state.inputError}
								value={this.state.password}
								onChange={this.handlePasswordChange}
								floatingLabelStyle={muiStyle.floatingLabelTextStyle}
								style={muiStyle.textFieldSecond} />
							<br />
							<RaisedButton
								type="submit"
								label="SIGN IN"
								backgroundColor="#039BE5"
								labelColor="#ffffff"
								fullWidth={true}
								style={muiStyle.button}
								labelStyle={muiStyle.buttonText}/>
							</form>
						</Paper>

						<Paper style={muiStyle.blankDiv}>
								<img src={logo} alt={"logo"}/>
								<h3 style={muiStyle.adminText}>NEU Bus Tracker Admin</h3>
						</Paper>
					</div>
					)}
			</div>
		)
	}
}

export default SignIn
