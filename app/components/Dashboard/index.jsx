import React from 'react';

import NewConnection from '../NewConnection';
import ConnectionsTable from '../ConnectionsTable';

import style from './style';

export default class Dashoboard extends React.Component {
  render() {
    return (
      <div className={style.app}>

          <NewConnection />
          <ConnectionsTable />

     </div>
    );
  }
}
