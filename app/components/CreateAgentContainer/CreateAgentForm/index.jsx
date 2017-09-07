import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// Material UI Styles
const muiStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  textFieldStyle: {
    margin: '0px 20px 40px 20px',
  },
  createButtonStyle:{
    margin: '0px 20px 40px 20px',
  }
}

export default class CreateAgentContainer extends React.Component {
  render() {
    return (
      <div>
        {/* Create new Agent TextFields */}
        <TextField
          hintText="Example Label"
          floatingLabelText="Agent Label"
          floatingLabelStyle={muiStyle.floatingLabelStyle}
          style={muiStyle.textFieldStyle}/>
        <RaisedButton
          label="Create"
          icon={<ContentAdd/>}
          labelColor="#fff"
          backgroundColor="#039BE5"
          style={muiStyle.createButtonStyle}/>
      </div>
    )
  }
}
