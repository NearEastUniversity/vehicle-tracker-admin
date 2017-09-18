import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateUserForm from './CreateUserForm'
import UsersTable from './UsersTable'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  }
}

// Component Style
import style from './style'

// Component Actions
import {getUsers} from './actions'

export default class UserContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.updateUsers()
  }

  changeOnUserList() {
    this.updateUsers()
  }

  userCreated(res){
    let newUser = res
    let newUsers = this.state.users.slice()
    newUsers.push(newUser)
    this.setState({
      users: newUsers,
    });
  }

  updateUsers() {
    getUsers((data) => {
      this.setState({
        users: data,
      });
    }, (res) => {
      console.log("error: " + res);
    })
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3 className={style.title}>Create User</h3>
          <CreateUserForm userCreated={this.userCreated.bind(this)}/>
          <UsersTable
            activeUser={this.props.activeUser}
            users={this.state.users}
            changeOnUserList={this.changeOnUserList.bind(this)}/>
        </Paper>
     </div>
    )
  }
}
