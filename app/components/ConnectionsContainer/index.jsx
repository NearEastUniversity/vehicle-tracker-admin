import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import ConnectionsTable from './ConnectionsTable'
import FilterForm from './FilterForm'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  }
}

// Component Style
import style from './style'

// Component Actions
import {
  getVehicles,
  getVehicleGroups,
  getVehicleTypes,
  getVehiclesList
 } from './actions'

export default class ConnectionsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleList: [],
      vehicleTypeList: [],
      vehicleGroupList: [],
      initType: "",
      initGroup: ""
    }
  }

  componentWillMount() {
    this.init()
  }

  init() {
    this.initVehicleList()
    this.updateVehicleTypes()
    this.updateVehicleGroups()
  }

  initVehicleList(){
    getVehicles(this.state.initType, this.state.initGroup, (data) => {
      this.setState({
        vehicleList: data,
      });
    }, (res) => {
      console.log(res);
    })
  }

  updateVehicleList(vehicleType, vehicleGroup){
    getVehicles(vehicleType, vehicleGroup, (data) => {
      this.setState({
        vehicleList: data,
      });
    }, (res) => {
      console.log(res);
    })
  }

  updateVehicleTypes(){
    getVehicleTypes((data) => {
      this.setState({
        vehicleTypeList: data,
      });
    }, (error) => {
      console.error(error);
    })
  }

  updateVehicleGroups(){
    getVehicleGroups((data) => {
      this.setState({
        vehicleGroupList: data,
      });
    }, (error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3 className={style.title}>Assigned Vehicles</h3>
          <FilterForm
            vehicleTypeList = {this.state.vehicleTypeList}
            vehicleGroupList = {this.state.vehicleGroupList}
            updateVehicleList = {this.updateVehicleList.bind(this)}/>
          <ConnectionsTable
            vehicleList={this.state.vehicleList}
          />
        </Paper>
     </div>
    )
  }
}
