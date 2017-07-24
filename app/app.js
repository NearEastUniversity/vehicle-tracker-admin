import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as
  Router,
  Route,
  Redirect
} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Component's paths
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Settings from './components/Settings'

// Higher Order components
import requiresAuth from './components/HOCs/requiresAuth'

injectTapEventPlugin();

const App = () => (
  <div>
  	<MuiThemeProvider>

    	<Router history={history}>
			  <div>
			   	<Route exact path="/"
            render={() => (
              <Redirect to={{pathname: '/dashboard'}}/>
            )}
          />
          <Route exact path="/signin" component={SignIn}/>
		      <Route path="/dashboard" component={requiresAuth(Dashboard)}/>
          <Route path="/settings" component={requiresAuth(Settings)}/>
          <Route path="/signout" component={requiresAuth(SignOut)}/>
		    </div>
	  	</Router>

    </MuiThemeProvider>
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('root')
)
