import React from 'react'
import './intro.css'
import portrait from './img/placeholder.jpg'
const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hei, Jeg heter</span>
        <span className='introText'>Daniel  <span className='introName'> Sarjomaa</span> </span>
        <span className='work'></span>
        <p className='introPara'>Bachelor i Digital infrastruktur og cybersikkerhet<br/>NTNU Gjøvik</p>
        <img src={portrait} alt='portrait' className='portrait'></img>
        </div>
       
    </section>
  )
}

export default intro