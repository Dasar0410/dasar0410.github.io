import React from 'react'
import './about.css' 
/* Legg til en splittet visning der venstre siden er om meg mens høyre siden er tech stacken jeg bruker og har lært i about div-en */
const about = () => {
    return (
        <section id='about' className='about'>
            <div className='aboutContainer'>
            <h1 className='aboutTitle'>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis erat non aliquet volutpat. Aliquam tempus laoreet bibendum. Donec venenatis augue eget tortor pulvinar viverra. Duis finibus imperdiet enim non ultrices. Morbi lobortis malesuada magna ac dictum. Duis eu efficitur enim, a porta erat. Donec vel mattis lectus. Aenean egestas mattis facilisis. Morbi eu orci nec felis egestas iaculis. Nunc gravida mattis nisl, a elementum enim aliquam nec. Nam mattis nisi scelerisque fermentum bibendum. Sed vitae ornare sapien.</p>
            
            </div>
        </section>
    )
  }
  
  export default about