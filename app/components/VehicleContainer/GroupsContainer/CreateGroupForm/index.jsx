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
    margin: '0px 40px 20px',
  }
}

// Component Actions
import { createGroup } from './actions'

// Component Style
import style from './style'

export default class CreateUserForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      groupInput: "",
      inputError: ""
    }
  }

  handleGroupChange(event){
    this.setState({
      groupInput: event.target.value
    })
  }

  handleCreateGroup(event){
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    let groupName = this.state.groupInput;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
    		if (arr[i] == null || arr[i] == "") {
          return false
    		}
      }
      return true
    }

    let reqInputs = [groupName];

    if (validateForm(reqInputs)) {
      let formData = {
        name: groupName
      }

    createGroup(formData, (res) => {
      this.setState({
        groupInput: "",
        inputError: ""
      })
      this.props.groupCreated(res);
    }, (err) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(err);
      }
    })

    } else {
      this.setState({
        inputError: "This field is required."
      })
    }
  }

  render() {
    return (
      <div>
        {/* Create new Group Form */}
        <form
          id="createGroup"
          onSubmit={this.handleCreateGroup.bind(this)}
          className={style.formStyle}>
          <div className={style.container}
          >
          <TextField
            value={this.state.groupInput}
            onChange={this.handleGroupChange.bind(this)}
            hintText="School Bus"
            floatingLabelText="Group"
            errorText={this.state.inputError}
            floatingLabelStyle={muiStyle.floatingLabelStyle}
            style={muiStyle.textFieldStyle}/>
          </div>
          <div className={style.container}>
            <RaisedButton
              type="submit"
              label="Create"
              icon={<ContentAdd/>}
              labelColor="#fff"
              backgroundColor="#039BE5"
              style={muiStyle.createButtonStyle}/>
          </div>
        </form>
     </div>
    )
  }
}
