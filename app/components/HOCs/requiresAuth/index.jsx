import React from 'react'
import { Redirect } from 'react-router-dom'

// Component Actions
import { isAuthenticated } from './actions'

export default function requiresAuth(Component, config) {
  class AuthenticatedComponent extends React.Component {

    constructor(props) {
      super()
      this.state = {
      }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
      return (
        <div className="authenticated">
          {isAuthenticated() ? (
            <Component {...this.props}/>
          ) : (
            <Redirect to={{
              pathname: '/signout',
              state: { from: this.props.location }
            }}/>
          )}
        </div>
      )
    }
  }

  return AuthenticatedComponent
}
