import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import Settings from './components/Settings'

// Higher Order components
import requiresAuth from './components/HOCs/requiresAuth'

injectTapEventPlugin();

const App = () => (
  <div>
  	<MuiThemeProvider>
      
    	<Router history={history}>
			  <div>
			   	<Route exact path="/" component={SignIn}/>
		      <Route path="/dashboard" component={requiresAuth(Dashboard, {role: "admin"})}/>
          <Route path="/settings" component={requiresAuth(Settings, {role: "admin"})}/>
		    </div>
	  	</Router>

    </MuiThemeProvider>
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('root')
)
