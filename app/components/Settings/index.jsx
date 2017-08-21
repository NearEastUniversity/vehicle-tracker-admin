import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import CreateUser from '../CreateUser'
import CreateAgent from '../CreateAgent'
import CreateVehicle from '../CreateVehicle'

// TestComponent
import TestComponent from '../TestComponent'

// Component Style
import style from './style'


export default class Dashoboard extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Navbar />

        {/* TestComponent */}
        <TestComponent />

        <CreateUser />
        <CreateAgent />
        <CreateVehicle />
      </div>
    )
  }
}
