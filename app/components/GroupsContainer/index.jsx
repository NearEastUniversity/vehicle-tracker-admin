import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateGroupForm from './CreateGroupForm'
import GroupsTable from './GroupsTable'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  }
}

// Component Style
import style from './style'

// Component Actions
import { getGroups } from './actions'

export default class GroupsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      groupList: []
    }
  }

  componentWillMount() {
    this.updateGroupList()
  }

  changeOnGroupList() {
    this.updateGroupList()
  }

  groupCreated(res){
    let newGroup = res
    let newGroups = this.state.groupList.slice()
    newGroups.push(newGroup)
    this.setState({
      groupList: newGroups,
    });
  }

  updateGroupList() {
    getGroups((data) => {
      this.setState({
        groupList: data,
      });
    }, (error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3>Create Group</h3>
          <CreateGroupForm groupCreated={this.groupCreated.bind(this)}/>
          <GroupsTable groupList={this.state.groupList} changeOnGroupList={this.changeOnGroupList.bind(this)}/>
        </Paper>
     </div>
    )
  }
}
