import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import style from './style'

const materialuiCreateConnectionStyle = {
  paperInput: {
    margin: '50px 50px 0px 50px',
  },
  selectFieldStyle: {
    display: 'inline-block',
    textAlign: 'left',
    margin: '0px 20px 40px 20px',
  },
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  createRisedButton: {
    margin: '0px 20px 40px 20px',
  }
}

const vehicles = [
  <MenuItem key={1} value={1} primaryText="Vehicles"  />,
  <MenuItem key={2} value={2} primaryText="Vehicles1" />,
  <MenuItem key={3} value={3} primaryText="Vehicles2" />,
  <MenuItem key={4} value={4} primaryText="Vehicles3" />,
  <MenuItem key={5} value={5} primaryText="Vehicles4" />,
]

const agents = [
  <MenuItem key={1} value={1} primaryText="Agents"  />,
  <MenuItem key={2} value={2} primaryText="Agents1" />,
  <MenuItem key={3} value={3} primaryText="Agents2" />,
  <MenuItem key={4} value={4} primaryText="Agents3" />,
  <MenuItem key={5} value={5} primaryText="Agents4" />,
]

export default class CreateConnection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleValue: 1,
      agentValue: 1
    }
  }

  vehicleSelect(event, index, vehicleValue) {
    this.setState({vehicleValue})
  }

  agentSelect(event, index, agentValue) {
    this.setState({agentValue})
  }

  render() {
    return (
      <div className={style.app}>
        <Paper zDepth={1} style={materialuiCreateConnectionStyle.paperInput}>
          <h3>Create Connection</h3>
            <SelectField
              style={materialuiCreateConnectionStyle.selectFieldStyle}
              floatingLabelText="Select Agent"
              floatingLabelFixed={true}
              floatingLabelStyle={materialuiCreateConnectionStyle.floatingLabelStyle}
              maxHeight={300}
              value={this.state.agentValue}
              onChange={this.agentSelect.bind(this)}>
              {agents}
            </SelectField>
            <SelectField
              style={materialuiCreateConnectionStyle.selectFieldStyle}
              floatingLabelText="Select vehicle"
              floatingLabelFixed={true}
              floatingLabelStyle={materialuiCreateConnectionStyle.floatingLabelStyle}
              maxHeight={300}
              value={this.state.vehicleValue}
              onChange={this.vehicleSelect.bind(this)}>
              {vehicles}
            </SelectField>
            <RaisedButton
              label="Create"
              icon={<ContentAdd/>}
              labelColor="#fff"
              backgroundColor="#039BE5"
              style={materialuiCreateConnectionStyle.createRisedButton}/>
        </Paper>
      </div>
    )
  }
}
