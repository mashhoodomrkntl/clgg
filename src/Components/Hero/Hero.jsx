import React from 'react'
import './Hero.css'
import dark_arro from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam eaque in nesciunt soluta cupiditate quisquam temporibus, non facere. Natus, pariatur?</p>
        <button className='btn'>Explore more <img src={dark_arro} alt="arr" /></button>
      </div>
    </div>
  )
}

export default Hero
