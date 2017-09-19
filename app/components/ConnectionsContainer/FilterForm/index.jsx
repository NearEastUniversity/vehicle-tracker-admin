import React from 'react'

// Material UI imports
import Divider from 'material-ui/Divider'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

// Component Style
import style from './style'

export default class FilterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleTypeSelect: "",
      vehicleGroupSelect: ""
    }
  }

  // Handle Inputs
  handleVehicleTypeChange(event, key, value){
    this.setState({
      vehicleTypeSelect: value
    })
    this.props.updateVehicleList(value, this.state.vehicleGroupSelect);
  }

  handleVehicleGroupChange(event, key, value){
    this.setState({
      vehicleGroupSelect: value
    })
    this.props.updateVehicleList(this.state.vehicleTypeSelect, value);
  }

  render() {
    return (
      <div>
        {/* Filter Vehicles by Type and Group Form */}
        <form
          className={style.formStyle}
          >
          <div className={style.container}>
            <SelectField
              className={style.selectField}
              floatingLabelFixed={true}
              floatingLabelText="Filter by Type"
              value={this.state.vehicleTypeSelect}
              onChange={(event, key, value) => {this.handleVehicleTypeChange(event, key, value)}}>
                <MenuItem value={""} primaryText="All" />
                <Divider />
                {this.props.vehicleTypeList.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type} primaryText={type} />
                  )
                })}
            </SelectField>
            <SelectField
              className={style.selectField}
              floatingLabelFixed={true}
              floatingLabelText="Filter by Group"
              value={this.state.vehicleGroupSelect}
              onChange={(event, key, value) => {this.handleVehicleGroupChange(event, key, value)}}>
                <MenuItem value={""} primaryText="All" />
                <Divider />
                {this.props.vehicleGroupList.map((groups, index) => {
                  return (
                    <MenuItem key={index} value={groups.id} primaryText={groups.name} />
                  )
                })}
                {/* <Divider />
                <MenuItem value={20} primaryText="Unassigned" /> */}
            </SelectField>
          </div>
        </form>

     </div>
    )
  }
}
