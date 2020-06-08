import React from "react"
import "../CSS/Nav.css"
import smallLogo from "../images/litenLoggaFrost.png"
import { NavLink } from "react-router-dom"



const Header = () => {
  return(
    <header className="App-header">
    <nav className="nav-bar">
    <a href="/"><img className="logo" alt="logo small" src={smallLogo}></img></a>
      <div className="menu">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
      </div>
    </nav>
  </header>
  )
}


export default Header;