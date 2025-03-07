import React from 'react'
import './card.css' 
import '../globals.css'

export const card = ({
    imgSrc,
    imgAlt,
    title,
    description,
}) => {
    return (
        <div className='card transition ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img className="card-img" src={imgSrc} alt={imgAlt}></img>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
        </div>
    )
}


export default card