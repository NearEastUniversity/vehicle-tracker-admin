import React from 'react'
import ReactDOM from 'react-dom'

// Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Instant TapEvents for React requires for 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//import component(s)
import Master from './components/Master'

const App = () => (
  <div>
  	<MuiThemeProvider>
      <Master />
    </MuiThemeProvider>
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('root')
)
