import React from 'react'
import './Header.css'
import logo from '../images/react-logo-png-7.png'

function Header() {
  return(
    <header className="nav-bar">
      <nav>
        <div className="nav-heading">
          <img src={logo} width="40px" alt="react-logo-png"/>
          <h1>React Facts</h1>
        </div>
        <h3>React Course - Project 1</h3>
      </nav>
    </header>
  )
}

export default Header
