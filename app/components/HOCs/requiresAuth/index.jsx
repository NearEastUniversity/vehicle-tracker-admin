import React from 'react'
// import {isAuthenticated, removeUserEssentials} from './actions'

export default function requiresAuth(Component, config) {
  class AuthenticatedComponent extends React.Component {

    constructor(props) {
      super()
      this.state = {
        isAuthenticated: true
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
      if(!this.state.isAuthenticated) {
        this.props.history.push('/')
      } else {
        console.log("authenticated user")
      }
    }

        render() {
            let isAuthenticated = this.state.isAuthenticated
            return (
                <div className="authenticated">
                    { isAuthenticated ? <Component {...this.props} role={config.role}/> : null }
                </div>
            )
        }
    }

    return AuthenticatedComponent
}
