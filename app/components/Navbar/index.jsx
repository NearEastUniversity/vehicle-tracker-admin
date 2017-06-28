import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

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
        <IconButton
          href="/dashboard"
          iconStyle={materialuiNavbarStyles.iconButtons}
          tooltip="Dashboard"
          touch={true}>
            <ActionDashboard/>
        </IconButton>
        <IconButton
          href="/settings"
          iconStyle={materialuiNavbarStyles.iconButtons}
          tooltip="Settings"
          touch={true}>
            <ActionSettings/>
        </IconButton>
        <IconButton
          href="/signout"
          iconStyle={materialuiNavbarStyles.iconButtons}
          tooltip="Sign out"
          tooltipPosition="bottom-left"
          touch={true}>
            <ActionexitToapp/>
        </IconButton>
      </div>
      }
  	/>
  </div>
)

export default Navbar
