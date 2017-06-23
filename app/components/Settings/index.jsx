import React from 'react'
import Navbar from '../Navbar'

import style from './style'

const Settings = (props) => (
  <div className={style.app}>
    <Navbar />
    <h1>Settings</h1>
    {console.log(props.role)}
  </div>
)

export default Settings
