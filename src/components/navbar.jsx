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
                <Link activeClass="active" smooth spy to="intro" className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" smooth spy to="portfolio" className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" smooth spy to="about" className="desktopMenuListItem">About</Link>
                <Link activeClass="active" smooth spy to="about" className="desktopMenuListItem">Certificates</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="Contact_Me" className="desktopMenuImg"></img> Contact me
            </button>

        </nav>

        <nav className="mob_navbar">
        <div className="S">S.</div>
        <div className={`mobileMenu ${showMenu ? 'visible' : 'invisible'}`}>
                <Link className="mobileMenuItem">Home</Link>
                <Link className="mobileMenuItem">Portfolio</Link>
                <Link className="mobileMenuItem">About</Link>
                <Link className="mobileMenuItem">Certificates</Link>
            </div>
            <button className="mobileMenuBtn " onClick={toggleMenu}>
                <ion-icon name="menu"></ion-icon>
                    </button>
                    </nav>
        </>
        
    )
    
}


export default Navbar