import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <header>
        <img className='logo' src={logo} alt="logo" />
        <nav>
            <ul className='navbar-ul'>
                <a><li>Show All Tyres</li></a>
                <a><li>Find a Dealer</li></a>
                <a><li>Guides & Videos</li></a>
                <a><li>Go with</li></a>
                <a><li>Service & Help</li></a>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar