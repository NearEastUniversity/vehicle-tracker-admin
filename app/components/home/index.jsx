import React from 'react';
import style from './style';

import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const Home = () => (
  <div className={style.app}>

    <AppBar
   		title="Dashboard"
    	iconElementRight={
    		<IconMenu
			    iconButtonElement={
			      <IconButton>
			      	<MoreVertIcon />
			      </IconButton>
			    }
			  >
			    <MenuItem primaryText="Refresh" />
			    <MenuItem primaryText="Help" />
			    <MenuItem href="/" primaryText="Sign out"></MenuItem>
  			</IconMenu>}
  	/>
  	
  </div>
);

export default Home;