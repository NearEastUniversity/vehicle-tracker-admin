import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';

import style from './style';
import logo from './img/logo.svg'

const materialSignInStyles = {
	gridList: {
		top: 0,
    margin: 'auto',
    paddingTop: 150,
  },
	materialPaper: {
		padding: 30,
		width: 350,
		height: 400,
		float: 'right',
	},
	materialBlankPaper: {
		textAlign: 'center',
		paddingTop: 100,
		height: 50,
		marginTop: 15,
		marginLeft: -20,
    width: 450,
    height: 370,
    backgroundColor: '#FFEF6A',
	},
	header: {
		textAlign: 'center',
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
    	<GridList style={materialSignInStyles.gridList} >

				  <Paper zDepth={4} style={materialSignInStyles.materialPaper} >
				  	<h2 style={materialSignInStyles.header} >Sign In</h2>
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
				    	label="SIGN IN" 
				    	backgroundColor="#039BE5" 
				    	labelColor="#ffffff" 
				    	fullWidth={true} 
				    	style={materialSignInStyles.button} 
				    	labelStyle={materialSignInStyles.buttonText} />
				  </Paper>

				  <Paper zDepth={1} style={materialSignInStyles.materialBlankPaper}>
				  	<img src={logo} alt={"logo"}/>
				  	<h3 style={materialSignInStyles.adminText}>NEU Bus Tracker Admin</h3>
				  </Paper>

		  </GridList>
    </div>
);

export default SignIn;
