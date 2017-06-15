import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Master from './components/Master';
import SignIn from './components/SignIn';

injectTapEventPlugin();

const App = () => (
  <div>
  	<MuiThemeProvider>
    	<SignIn />
    </MuiThemeProvider>
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('root')
);
