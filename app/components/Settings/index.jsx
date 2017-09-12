 import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import UserContainer from '../UserContainer'
import VehicleContainer from '../VehicleContainer'

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserContainer />
        <VehicleContainer />
      </div>
    )
  }
}
