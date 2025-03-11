import React from 'react'
import './intro.css'
import '../globals.css'
import portrait from './img/portrait.webp'
const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='small-header'>Hi, I am</span>
        <span className='introText large-header'>Daniel<span className='introName large-header'> Sarjomaa</span> </span>
        <span className='work'></span>
        <p className='introPara medium-text'>Bachelor in Digital Infrastructure and Cybersecurity,</p>
        <p className='introPara medium-text'>Master in Informatics,<br/>NTNU</p>
        <img src={portrait} alt='portrait' className='portrait'></img>
        </div>
       
    </section>
  )
}

export default intro