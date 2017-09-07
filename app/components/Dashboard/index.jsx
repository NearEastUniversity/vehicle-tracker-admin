import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import CreateConnectionContainer from '../CreateConnectionContainer'
import ConnectionsTable from '../ConnectionsTable'

// Component Style
import style from './style'


export default class Dashoboard extends React.Component {
  render() {

    return (
      <div className={style.app}>
          <Navbar />
          <CreateConnectionContainer />
          <ConnectionsTable />
     </div>
    )
  }
}
