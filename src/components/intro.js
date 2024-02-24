import React from 'react'
import './intro.css'
import portrait from './img/portrait.jpg'
const intro = () => {
  return (
    <section id='intro'>
        <div className='IntroContent'>
        <span className='Hei'>Hei,</span>
        <span className='introText'>Jeg heter <span className='introName'>Daniel</span> <br/>Cybersikkerhet student</span>
        <p className='introPara'>Jeg er en tredjeårsstudent på Digital Infrastruktur og Cybersikkerhet i Gjøvik</p>
        </div>
        <img src={portrait} alt='portrait'></img>

    </section>
  )
}

export default intro