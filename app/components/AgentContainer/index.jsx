import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateAgentForm from './CreateAgentForm'
import AgentsTable from './AgentsTable';

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  }
}

// Component Style
import style from './style'

export default class AgentContainer extends React.Component {

  render() {
    return (
      <div className={style.app}>
          <Paper zDepth={1} style={muiStyle.paper}>
            <h3>Create Agent</h3>
            <CreateAgentForm />
            <AgentsTable />
           </Paper>
     </div>
    )
  }
}
