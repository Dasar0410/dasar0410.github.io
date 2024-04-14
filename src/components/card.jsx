import React from 'react'
import './card.css'
import project from './img/empty.png' 

const card = () => {
    return (
        <div className='card transition ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img className="card-img" src={project} alt='projectimg'></img>
        <h2>Prosjekt1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus enim at odio sagittis hendrerit. Donec risus erat, imperdiet quis fermentum id, tincidunt id orci. Duis tempor consectetur tellus id. </p>
        </div>
    )
}


export default card