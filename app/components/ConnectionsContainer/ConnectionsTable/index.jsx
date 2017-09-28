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

// i18n
import translate from './translate'

export default class ConnectionsTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    let lang = "EN"

    return (
      <div className={style.app}>
        {/* Table with vehicles connected to agents */}
        <Table
          selectable={false}>
           <TableHeader
             displaySelectAll={false}
             adjustForCheckbox={false}>
             <TableRow>
               <TableHeaderColumn>{translate[lang].plateID}</TableHeaderColumn>
               <TableHeaderColumn>{translate[lang].type}</TableHeaderColumn>
               <TableHeaderColumn>{translate[lang].agent}</TableHeaderColumn>
               <TableHeaderColumn>{translate[lang].group}</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody
             displayRowCheckbox={false}>

             {/* Maps through the vehicleList state to render vehicle rows */}
             {this.props.vehicleList.map((vehicle, index) => {
               if(vehicle.agent) {
                 return (
                   <TableRow key={index}>
                     <TableRowColumn>{vehicle.plate_id && vehicle.plate_id}</TableRowColumn>
                     <TableRowColumn>{vehicle.type && vehicle.type}</TableRowColumn>
                     <TableRowColumn>{vehicle.agent && vehicle.agent.uuid}</TableRowColumn>
                     <TableRowColumn>{(() => {
                       if (vehicle.groups) {
                         return (
                           vehicle.groups.map((group, index) =>
                            <span style={{display: "block"}} key={index}>{group.name}</span>
                         ))
                       } else {
                         return "---"
                       }
                     })()}</TableRowColumn>
                   </TableRow>
                 )
               }
             })}
           </TableBody>
         </Table>
     </div>
    )
  }
}
