import React from 'react'

// Material UI imports
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

// Component Style
import style from './style'

export default class ConnectionsTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicleList: props.vehicleList,
    }
  }

  render() {
    return (
      <div className={style.app}>
        {/* Table with vehicles connected to agents */}
        <Table
          selectable={false}>
           <TableHeader
             displaySelectAll={false}
             adjustForCheckbox={false}>
             <TableRow>
               <TableHeaderColumn>Plate ID</TableHeaderColumn>
               <TableHeaderColumn>Type</TableHeaderColumn>
               <TableHeaderColumn>Agent</TableHeaderColumn>
               <TableHeaderColumn>Groups</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody
             displayRowCheckbox={false}>

             {/* Maps through the vehicleList state to render vehicle rows */}
             {this.props.vehicleList.map((vehicle, index) => {
               return (
                 <TableRow key={index}>
                   <TableRowColumn>{vehicle.plate_id && vehicle.plate_id}</TableRowColumn>
                   <TableRowColumn>{vehicle.type && vehicle.type}</TableRowColumn>
                   <TableRowColumn>{vehicle.agent.uuid && vehicle.agent.uuid}</TableRowColumn>
                   <TableRowColumn>{vehicle.groups || ""}</TableRowColumn>
                 </TableRow>
               )
             })}
           </TableBody>
         </Table>
     </div>
    )
  }
}
