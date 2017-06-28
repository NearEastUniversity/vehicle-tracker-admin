import React from 'react'
import {isAuthenticated, removeUserEssentials} from './actions'

export default function requiresAuth(Component, config) {
  class AuthenticatedComponent extends React.Component {

    constructor(props) {
      super()
      this.state = {
        // isAuthenticated: true
      }
    }

    componentDidMount() {
        console.log('didMount: AuthenticatedComponent')
        this._checkAndRedirect()
        console.log(config)
    }

    componentDidUpdate() {
        console.log('didUpdate: AuthenticatedComponent')
    }

    _checkAndRedirect() {
      if(!isAuthenticated()) {
        this.props.history.push('/')
        removeUserEssentials()
      } else {
        console.log("authenticated user")
      }
    }

        render() {
            return (
                <div className="authenticated">
                    { isAuthenticated() ? <Component {...this.props}/> : null }
                </div>
            )
        }
    }

    return AuthenticatedComponent
}
