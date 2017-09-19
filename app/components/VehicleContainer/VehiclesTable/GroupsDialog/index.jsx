import React, { Component } from 'react'

// Material UI imports
import Dialog from 'material-ui/Dialog'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'

// import component actions
import { setVehicleGroups } from './actions';

export default class GroupsDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicleGroupListSelect: [],
      editVehicle: []
    };
  }

  handleVehicleGroupListChange(event, key, value){
    this.setState({
      vehicleGroupListSelect: value
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setPreselectedGroups(nextProps.editVehicle);
  }

  setPreselectedGroups(vehicle){
    let preselectGroupsArr = []
    if (vehicle.groups){
      vehicle.groups.map((group) => {
        return (
          preselectGroupsArr.push(group.id)
        )
      })
    }

    this.setState({
      vehicleGroupListSelect: preselectGroupsArr
    });
  }

  handleGroupDialogConfirm(){
    let plate_id = this.props.editVehicle.plate_id
    let groups = {
      groups: this.state.vehicleGroupListSelect
    }

    setVehicleGroups(plate_id, groups, (res) => {
      this.props.confirm()
    }, (err) => {
      console.log(err);
    })
  }

  render() {

    const dialogActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.props.close.bind(this)}
      />,
      <FlatButton
        label="Save Changes"
        style={{color: "#02C386"}}
        primary={true}
        onTouchTap={this.handleGroupDialogConfirm.bind(this)}
      />,
    ]

    return (
      <Dialog
        title={`Set groups for Vehicle ${this.props.editVehicle.plate_id}`}
        actions={dialogActions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.close.bind(this)}
        >
          <SelectField
          multiple={true}
          hintText="Select group"
          value={this.state.vehicleGroupListSelect}
          onChange={this.handleVehicleGroupListChange.bind(this)}
          >

            {this.props.vehicleGroupList.map((group) => {
              return (
                <MenuItem
                  key={group.id}
                  value={group.id}
                  primaryText={group.name}
                  insetChildren={true}
                  checked={this.state.vehicleGroupListSelect && this.state.vehicleGroupListSelect.indexOf(group.id) > -1}
                />
              )
            })}

        </SelectField>

      </Dialog>
    );
  }

}
