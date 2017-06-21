import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import GridList from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import ImageEdit from 'material-ui/svg-icons/image/edit';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';

import style from './style';

const materialuiDashboardStyle = {
  paper: {
    padding: '50px',
  },
  paperInput: {
    margin: '50px',
    textAlign: 'center',
  },
  iconEditButton: {
    color: '#039BE5',
  },
  iconUnassignButton: {
    color: '#FF0000',
  }
}

export default class Dashoboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div className={style.app}>

        <div className={style.input}>
          <Paper zDepth={1} style={materialuiDashboardStyle.paperInput}>
            <div className={style.DropDown}>
              <SelectField
                floatingLabelText="Agents"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}>
                <MenuItem value={1} primaryText="Agents" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
              </SelectField>
            </div>

            <div className={style.DropDown}>
              <SelectField
                floatingLabelText="Vehicles"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}>
                <MenuItem value={1} primaryText="Vehicles" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
              </SelectField>
            </div>
            <div className={style.createButton}>
              <RaisedButton>Create</RaisedButton>
            </div>
          </Paper>
        </div>

        <div className={style.table}>
          <Paper zDepth={1} style={materialuiDashboardStyle.paper}>
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
                       iconStyle={materialuiDashboardStyle.iconEditButton}
                       tooltip="Edit"
                       tooltipPosition="top-center"
                       touch={true}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       touch={true}>
                         <ContentRemoveCircle/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconEditButton}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       touch={true}>
                         <ContentRemoveCircle/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconEditButton}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       touch={true}>
                         <ContentRemoveCircle/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconEditButton}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       touch={true}>
                         <ContentRemoveCircle/>
                     </IconButton>
                   </TableRowColumn>
                 </TableRow>
                 <TableRow>
                   <TableRowColumn>123456</TableRowColumn>
                   <TableRowColumn>AD 234</TableRowColumn>
                   <TableRowColumn>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconEditButton}>
                         <ImageEdit/>
                     </IconButton>
                     <IconButton
                       iconStyle={materialuiDashboardStyle.iconUnassignButton}
                       touch={true}>
                         <ContentRemoveCircle/>
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
