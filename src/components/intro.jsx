import React from 'react'
import './intro.css'
import portrait from './img/placeholder.svg'
const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hi, I am</span>
        <span className='introText'>Daniel  <span className='introName'> Sarjomaa</span> </span>
        <span className='work'></span>
        <p className='introPara'>Bachelor in Digital Infrastructure and Cybersecurity<br/>NTNU Gjøvik</p>
        <img src={portrait} alt='portrait' className='portrait'></img>
        </div>
       
    </section>
  )
}

export default intro