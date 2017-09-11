import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateVehicleForm from './CreateVehicleForm'
import VehiclesTable from './VehiclesTable'

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

export default class CreateVehicleContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleList: []
    }
  }

  componentWillMount() {
    this.updateVehicleList()
  }

  changeOnVehicleList() {
    this.updateVehicleList()
  }

  vehicleCreated(res){
    let newVehicle = res
    let newVehicles = this.state.vehicleList.slice()
    newVehicles.push(newVehicle)
    this.setState({
      vehicleList: newVehicles,
    });
  }

  updateVehicleList(){
    getVehicles((data) => {
      this.setState({
        vehicleList: data
      });
    }, (error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3>Create Vehicle</h3>
          <CreateVehicleForm vehicleCreated={this.vehicleCreated.bind(this)}/>
          <VehiclesTable vehicleList={this.state.vehicleList} changeOnVehicleList={this.changeOnVehicleList.bind(this)}/>
         </Paper>
     </div>
    )
  }
}
