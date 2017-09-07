import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import ConnectionsTable from './ConnectionsTable'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  }
}

// Component Style
import style from './style'

export default class ConnectionsContainer extends React.Component {

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3>Connections Table</h3>
          <ConnectionsTable />
        </Paper>
     </div>
    )
  }
}
