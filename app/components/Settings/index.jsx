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
      if (process.env.NODE_ENV !== 'production') {
        console.log(err);
      }
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
