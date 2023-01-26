import React from 'react'
import './Main.css'
import reactLogo from '../assets/react.svg'

function Main() {
  return(
    <div className="main-container">
      <img alt="React logo large" src={reactLogo}/>
      <div className="main-content">
        <h1 className="main--header">Fun facts about React</h1>
        <ul className="main--list_container">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  )
}

export default Main
