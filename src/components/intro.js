import React from 'react'
import './intro.css'
import portrait from './img/portrait.jpg'
const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hei,</span>
        <span className='introText'> Jeg heter <span className='introName'>Daniel.</span> <br/>Student</span>
        <p className='introPara'>Digital Infrastruktur og Cybersikkerhet 3.år<br/> ved NTNU Gjøvik</p>
        <img src={portrait} alt='portrait' className='portrait'></img>
        </div>
       
    </section>
  )
}

export default intro