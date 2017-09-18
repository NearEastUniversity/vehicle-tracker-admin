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

// Component Actions
import {getVehicles } from './actions'

export default class ConnectionsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleList: []
    }
  }

  componentWillMount() {
    this.updateVehicleList()
  }

  updateVehicleList(){
    getVehicles((data) => {
      this.setState({
        vehicleList: data,
      });
    }, (res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3 className={style.title}>Connections Table</h3>
          <ConnectionsTable vehicleList={this.state.vehicleList}/>
        </Paper>
     </div>
    )
  }
}
