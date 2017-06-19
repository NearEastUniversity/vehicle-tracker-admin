import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import style from './style';
import logo from './img/logo.svg'

const materialSignInStyles = {
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
		marginTop: 40,
	},
	textFieldSecond: {
		marginTop: -20,
	},
	floatingLabelTextStyle: {
		fontWeight: 'normal',
	},
	button: {
		marginTop: 50,
		height: 45,
	},
	buttonText: {
		fontSize: 20,
	},
	adminText: {
		color: '#4A4A4A',
	},
};

const SignIn = () => (
  <div className={style.app}>
   	<div className={style.container}>
			<Paper zDepth={4} style={materialSignInStyles.signIN} >
				<h2>Sign In</h2>
				<TextField
		    	hintText="email@example.com"
				  floatingLabelText="Email"
				  floatingLabelStyle={materialSignInStyles.floatingLabelTextStyle}
				  style={materialSignInStyles.textFieldFirst} />
				 <br />
				<TextField
	    		hintText="********"
					floatingLabelText="Password"
	    		type="password"
			  	floatingLabelStyle={materialSignInStyles.floatingLabelTextStyle}
					style={materialSignInStyles.textFieldSecond} />
				<br />
				<RaisedButton
					href="/home"
			  	label="SIGN IN"
				  backgroundColor="#039BE5"
		    	labelColor="#ffffff"
				  fullWidth={true}
			  	style={materialSignInStyles.button}
				  labelStyle={materialSignInStyles.buttonText}/>
			</Paper>

			<Paper style={materialSignInStyles.blankDiv}>
				 	<img src={logo} alt={"logo"}/>
				  <h3 style={materialSignInStyles.adminText}>NEU Bus Tracker Admin</h3>
			</Paper>
		</div>
	</div>
);

export default SignIn;
