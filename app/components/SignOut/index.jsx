import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class SignOut extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
      this._clearUserData()
  }

  _clearUserData() {
      localStorage.clear()
  }

  render () {
      return (
        <Redirect to="/signin"/>
      )
  }

}
