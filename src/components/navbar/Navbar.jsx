import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import openBtn from "../../assets/menu.png"
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
    const nav = document.querySelector("nav")
    isOpen ? nav.style.display = "none" : nav.style.display = "block"

  }
  console.log(isOpen);

  return (
    <header>
      {/* Navbar Mobile */}
        <div className='logo-div'>
        <img className='logo' src={logo} alt="logo" />
        <img onClick={handleMenu} className='mobil-logo' src={openBtn} alt="mobil-logo" />
        </div>
        <nav>
            <ul className='navbar-ul'>
                <a href='#'>
                <li>Show All Tyres
                <i className="fas fa-chevron-right"></i>
                </li>
                </a>
                <a href='#'>
                <li>Find a Dealer
                <i className="fas fa-chevron-right"></i>
                </li>
                </a>
                <a href='#'>
                <li>Guides & Videos
                <i className="fas fa-chevron-right"></i>
                </li>
                </a>
                <a href='#'>
                <li>Go with
                <i className="fas fa-chevron-right"></i>
                </li>
                </a>
                <a href='#'>
                <li>Service & Help
                <i className="fas fa-chevron-right"></i>
                </li>
                </a>
                {/* <a href='#'><li>Find a Dealer</li></a>
                <a href='#'><li>Guides & Videos</li></a>
                <a href='#'><li>Go with</li></a>
                <a href='#'><li>Service & Help</li></a> */}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar