import React from 'react'
import CreateConnection from '../CreateConnection'
import ConnectionsTable from '../ConnectionsTable'
import Navbar from '../Navbar'

import style from './style'

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div className={style.app}>
          <Navbar />
          <CreateConnection />
          <ConnectionsTable />
     </div>
    )
  }
}
