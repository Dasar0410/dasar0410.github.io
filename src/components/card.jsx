import React from 'react'
import './card.css' 
import '../globals.css'

export const card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    link,
}) => {
    return (
        <a href={link} className='card-link'>
        <div className='card'>
        
        <img className="card-img" src={imgSrc} alt={imgAlt}></img>
        <h2 className='title large-text'>{title}</h2>
        <p className='description small-text'>{description}</p>
        
        </div>
        </a>
    )
}


export default card