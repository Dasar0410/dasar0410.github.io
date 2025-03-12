import React from 'react'
import './about.css' 
import '../globals.css'
/* Legg til en splittet visning der venstre siden er om meg mens høyre siden er tech stacken jeg bruker og har lært i about div-en */
const about = () => {
    return (
        <section id='about' className='about'>
        <div className='gridAbout'>
            <div className='aboutContainer'>
                <h1 className='large-header'>About</h1>
                <p className='small-text'>I am pursuing a Master’s in Software Engineering at NTNU, with a Bachelor’s in Digital Infrastructure and Cybersecurity.<br></br> Skilled in JavaScript, CSS, SQL, C++, and Java, with hands-on experience in full-stack web development and cloud infrastructure (logging, monitoring, Active Directory).<br></br> Current project i am working on is Sarjomaa-Cuisine, a cookbook which has been a passion of mine to create for a long time.</p>
            </div>
            </div>
        </section>
    )
  }
  
  export default about