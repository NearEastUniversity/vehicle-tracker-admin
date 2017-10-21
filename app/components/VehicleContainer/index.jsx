import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateVehicleForm from './CreateVehicleForm'
import VehiclesTable from './VehiclesTable'
import GroupsContainer from './GroupsContainer'

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
  getUnassignedAgents,
  getVehicleGroups,
  getVehicleTypes
} from './actions'

export default class VehicleContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleList: [],
      agentList: [],
      vehicleGroupList: [],
      vehicleTypeList: []
    }
  }

  componentWillMount() {
    this.init()
  }

  init(){
    this.updateVehicleList()
    this.updateAgentList()
    this.updateVehicleGroups()
    this.updateVehicleTypes()
  }

  changeOnVehicleList() {
    this.updateVehicleList()
  }

  changeOnAgentList() {
    this.updateAgentList()
  }

  updateAgentList(){
    getUnassignedAgents((data) => {
      this.setState({
        agentList: data,
      });
    }, (error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    })
  }

  changeOnGroups(){
    this.updateVehicleGroups()
    this.updateVehicleList()
  }

  updateVehicleGroups(){
    getVehicleGroups((data) => {
      this.setState({
        vehicleGroupList: data,
      });
    }, (error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    })
  }

  updateVehicleTypes(){
    getVehicleTypes((data) => {
      this.setState({
        vehicleTypeList: data,
      });
    }, (error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    })
  }


  vehicleCreated(res){
    let newVehicle = res
    let newVehicles = this.state.vehicleList.slice()
    newVehicles.push(newVehicle)
    this.setState({
      vehicleList: newVehicles,
    });
    this.updateAgentList()
  }

  updateVehicleList(){
    getVehicles((data) => {
      this.setState({
        vehicleList: data,
      });
    }, (error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    })
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3 className={style.title}>Create Vehicle</h3>

          <CreateVehicleForm
            vehicleTypeList = {this.state.vehicleTypeList}
            vehicleGroupList = {this.state.vehicleGroupList}
            agentList = {this.state.agentList}
            vehicleCreated = {this.vehicleCreated.bind(this)}
          />

          <VehiclesTable
            vehicleList = {this.state.vehicleList}
            changeOnVehicleList = {this.changeOnVehicleList.bind(this)}
            changeOnAgentList = {this.changeOnAgentList.bind(this)}
            vehicleGroupList = {this.state.vehicleGroupList}
            agentList = {this.state.agentList}
          />
         </Paper>
         <GroupsContainer changeOnGroups = {this.changeOnGroups.bind(this)}/>
     </div>
    )
  }
}
