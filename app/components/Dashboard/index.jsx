import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import GridList from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import ImageEdit from 'material-ui/svg-icons/image/edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';

import style from './style';

const materialuiDashboardStyle = {
  paperInput: {
    margin: '50px 50px 0px 50px',
  },
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  paper: {
    padding: '0px 50px 50px 50px',
  },
  iconEditButton: {
    color: '#039BE5',
  },
  iconUnassignButton: {
    color: '#FF0000',
  },
  iconButton: {
    zIndex: '9999 !important',
  },
}

export default class Dashoboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {vehicleValue: 1, agentValue: 1};
  }

  vehicleChange(event, index, vehicleValue) {
    this.setState({vehicleValue});
  }

  agentChange(event, index, agentValue) {
    this.setState({agentValue});
  }

  render() {
    return (
      <div className={style.app}>

        <div className={style.input}>
          <Paper zDepth={1} style={materialuiDashboardStyle.paperInput}>
            <h3>New Connection</h3>
            <div className={style.dropDown}>
              <SelectField
                floatingLabelText="Select Agent"
                floatingLabelFixed={true}
                floatingLabelStyle={materialuiDashboardStyle.floatingLabelStyle}
                maxHeight={300}
                value={this.state.agentValue}
                onChange={this.agentChange.bind(this)}>
                <MenuItem value={1} primaryText="Agents" />
                <MenuItem value={2} primaryText="Agents1" />
                <MenuItem value={3} primaryText="Agents2" />
                <MenuItem value={4} primaryText="Agents3" />
                <MenuItem value={5} primaryText="Agents4" />
              </SelectField>
            </div>

            <div className={style.dropDown}>
              <SelectField
                floatingLabelText="Select vehicle"
                floatingLabelFixed={true}
                floatingLabelStyle={materialuiDashboardStyle.floatingLabelStyle}
                maxHeight={300}
                value={this.state.vehicleValue}
                onChange={this.vehicleChange.bind(this)}>
                <MenuItem value={1} primaryText="Vehicles" />
                <MenuItem value={2} primaryText="Vehicles1" />
                <MenuItem value={3} primaryText="Vehicles2" />
                <MenuItem value={4} primaryText="Vehicles3" />
                <MenuItem value={5} primaryText="Vehicles4" />
              </SelectField>
            </div>
            <div className={style.createButton}>
              <RaisedButton
                label="Create"
                icon={<ContentAdd/>}
                labelColor="#fff"
                backgroundColor="#039BE5"
                style={materialuiDashboardStyle.createRisedButton}/>
            </div>
          </Paper>
        </div>

        <div className={style.table}>
          <Paper zDepth={1} style={materialuiDashboardStyle.paper}>
            <h3>Connections</h3>
            <Table
              selectable={false}>
               <TableHeader
                 displaySelectAll={false}
                 adjustForCheckbox={false}>
                 <TableRow>
                   <TableHeaderColumn>Agent ID</TableHeaderColumn>
                   <TableHeaderColumn>Vehicle ID</TableHeaderColumn>
                   <TableHeaderColumn>Options</TableHeaderColumn>
                 </TableRow>
               </TableHeader>
               <TableBody
                 displayRowCheckbox={false}>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconEditButton}
                       tooltip="Edit"
                       touch={true}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       tooltip="Unassign"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconEditButton}
                       tooltip="Edit"
                       touch={true}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       tooltip="Unassign"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconEditButton}
                       tooltip="Edit"
                       touch={true}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       tooltip="Unassign"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconEditButton}
                       tooltip="Edit"
                       touch={true}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       tooltip="Unassign"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconEditButton}
                       tooltip="Edit"
                       touch={true}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       style={materialuiDashboardStyle.iconButton}
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       tooltip="Unassign"
                       touch={true}>
                         <ActionDelete/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
               </TableBody>
             </Table>
           </Paper>
         </div>

     </div>
    );
  }
}
