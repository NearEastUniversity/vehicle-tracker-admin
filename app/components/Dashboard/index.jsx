import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import CreateConnectionContainer from '../CreateConnectionContainer'
import ConnectionsContainer from '../ConnectionsContainer'

// Component Style
import style from './style'

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CreateConnectionContainer />
        <ConnectionsContainer />
     </div>
    )
  }
}
