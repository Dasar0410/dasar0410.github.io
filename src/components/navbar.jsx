import React, { useState } from "react";
import './navbar.css'
import contactImg from './img/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
        <nav className="navbar">
        <div className="S">S.</div>
            <div className={`desktopMenu ${showMenu ? 'hide' : ''}`}>
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Certificates</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="Contact_Me" className="desktopMenuImg"></img> Contact me
            </button>
            <button className="desktopMenuBtn" onClick={toggleMenu}>
                <ion-icon name="menu"></ion-icon>
                    </button>
        </nav>


        <div className={`mobileMenu ${showMenu ? 'visible' : 'invisible'}`}>
                <Link className="mobileMenuItem">Home</Link>
                <Link className="mobileMenuItem">About</Link>
                <Link className="mobileMenuItem">Portfolio</Link>
                <Link className="mobileMenuItem">Certificates</Link>
            </div>
        </>
        
    )
    
}


export default Navbar