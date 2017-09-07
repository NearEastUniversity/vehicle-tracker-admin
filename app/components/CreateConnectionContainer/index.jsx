import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateConnectionForm from './CreateConnectionForm'

// Component Style
import style from './style'

export default class CreateConnectionContainer extends React.Component {

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1}>
          <h3>Create Connection</h3>
          <CreateConnectionForm />
        </Paper>
      </div>
    )
  }
}
