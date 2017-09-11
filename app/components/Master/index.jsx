import React, { Component } from 'react'
import {
  BrowserRouter as
  Router,
  Route,
  Redirect
} from 'react-router-dom'

// Higher Order components
import requiresAuth from '../HOCs/requiresAuth'

// Component's paths
import Dashboard from '../Dashboard'
import SignIn from '../SignIn'
import SignOut from '../SignOut'
import Settings from '../Settings'

// Component Style
import style from './style'

export default class Master extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/"
            render={() => (
              <Redirect to={{pathname: '/dashboard'}}/>
            )}
          />
          <Route exact path="/signin" component={SignIn}/>
          <Route path="/dashboard" component={requiresAuth(Dashboard)}/>
          <Route path="/settings" component={requiresAuth(Settings)}/>
          <Route path="/signout" component={requiresAuth(SignOut)}/>
        </div>
      </Router>
    );
  }
}
