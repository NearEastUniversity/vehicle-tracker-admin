import React from 'react'
import Navbar from '../Navbar'
import CreateUser from '../CreateUser'
import CreateAgent from '../CreateAgent'
import CreateVehicle from '../CreateVehicle'

import style from './style'

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Navbar />
        <CreateUser />
        <CreateAgent />
        <CreateVehicle />
      </div>
    )
  }
}
