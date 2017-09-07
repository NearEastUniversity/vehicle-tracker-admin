import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import CreateUserContainer from '../CreateUserContainer'
import CreateAgent from '../CreateAgent'
import CreateVehicle from '../CreateVehicle'

// Component Style
import style from './style'

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Navbar />
        <CreateUserContainer />
        <CreateAgent />
        <CreateVehicle />
      </div>
    )
  }
}
