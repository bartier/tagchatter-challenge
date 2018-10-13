import React from 'react'

import SideBar from './components/SideBar'
import Header from './components/Header'
import Messages from './components/Messages'
import Form from './components/Form'

import './reset.css'
import './styles.css'

const TagChatter = () => (
  <div className="wrapper">
    <SideBar/>
    
    <div className="content">
      <Header />
      <Messages />
      <Form />
    </div>
  </div>
)

export default TagChatter;