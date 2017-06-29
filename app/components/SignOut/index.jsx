import React, { Component } from 'react';

export default class SignOut extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {
      this.signOutUser()
  }

  signOutUser() {
      localStorage.clear()
      this.props.history.push('/signin')
  }

  render () {
      return null
  }

}
