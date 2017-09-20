 import React from 'react'

// Component's paths
import Navbar from '../Navbar'
import UserContainer from '../UserContainer'
import VehicleContainer from '../VehicleContainer'

// Component Actions
import { getUserCredentials } from './actions'

export default class Dashoboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: {}
    }
  }

  componentWillMount() {
    this.setUserCredentials()
  }

  setUserCredentials(){
    getUserCredentials((data) => {
      this.setState({
        activeUser: data,
      });
    }, (err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <VehicleContainer />
        <UserContainer activeUser={this.state.activeUser}/>
      </div>
    )
  }
}
