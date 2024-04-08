import React from 'react'
import './intro.css'
import portrait from './img/portrait.jpg'
const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hei,</span>
        <span className='introText'> Jeg heter <span className='introName'>Daniel.</span> </span>
        <span className='work'>Student</span>
        <p className='introPara'>Bachelor i Digital infrastruktur og cybersikkerhet<br/>NTNU Gjøvik</p>
        <img src={portrait} alt='portrait' className='portrait'></img>
        </div>
       
    </section>
  )
}

export default intro