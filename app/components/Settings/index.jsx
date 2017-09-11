import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import CreateUserContainer from '../CreateUserContainer'
import CreateAgentContainer from '../CreateAgentContainer'
import CreateVehicleContainer from '../CreateVehicleContainer'

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CreateUserContainer />
        <CreateAgentContainer />
        <CreateVehicleContainer />
      </div>
    )
  }
}
