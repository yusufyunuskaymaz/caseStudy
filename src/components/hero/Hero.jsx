import React from 'react'
import heroImg from "../../assets/hero.png"
import "./hero.css"

const Hero = () => {
  return (
    <main>
        <div className='hero'>
            <div className='hero-title'>
            <h1>Nothing Can stop <br /> you</h1>
            <button className='hero-btn'>FIND OUT MORE</button>
            </div>
        </div>
    </main>
  )
}

export default Hero