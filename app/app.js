import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from './components/home';
import SignIn from './components/signIn';

injectTapEventPlugin();

const App = () => (
  <div>
  	<MuiThemeProvider>

    	<Router history={history}>
			  <div>		
			   	<Route exact path="/" component={SignIn}/>
		      <Route exact path="/home" component={Home}/>
		    </div>
	  	</Router>

    </MuiThemeProvider>
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('root')
);
