import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import { BrowserRouter as IndexRoute, NavLink } from 'react-router-dom'

import ActionDashboard from 'material-ui/svg-icons/action/Dashboard'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import ActionexitToapp from 'material-ui/svg-icons/action/exit-to-app'

import style from './style'

const materialuiNavbarStyles = {
  appbar: {
    backgroundColor: '#039BE5',
    position: 'relative',
  },
  iconButtons: {
    color: '#ffffff',
    opacity: '0.5',
  }
}

const Navbar = () => (
  <div className={style.app}>
    <AppBar
      style={materialuiNavbarStyles.appbar}
   		title="NEU Bus Tracker Admin"
      showMenuIconButton={false}
    	iconElementRight={
      <div>
        <NavLink to="/dashboard" activeClassName={style.active}>
          <IconButton
            iconStyle={materialuiNavbarStyles.iconButtons}
            tooltip="Dashboard"
            touch={true}>
              <ActionDashboard/>
          </IconButton>
        </NavLink>
        <NavLink to="/settings" activeClassName={style.active}>
          <IconButton
            iconStyle={materialuiNavbarStyles.iconButtons}
            tooltip="Settings"
            touch={true}>
              <ActionSettings/>
          </IconButton>
        </NavLink>
        <NavLink to="/signout">
          <IconButton
            iconStyle={materialuiNavbarStyles.iconButtons}
            tooltip="Sign out"
            tooltipPosition="bottom-left"
            touch={true}>
              <ActionexitToapp/>
          </IconButton>
        </NavLink>
      </div>
      }
  	/>
  </div>
)

export default Navbar
