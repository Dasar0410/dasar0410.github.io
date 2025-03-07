import React, { useState } from "react";

import contactImg from './img/contact.png'
import { Link } from 'react-scroll'

import './navbar.css'
import '../globals.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
        <nav className="navbar">
        <div className="S">S.</div>
            <div className={`desktopMenu  ${showMenu ? 'hide' : ''} `}>
                <Link activeClass="active" smooth spy to="intro" className="desktopMenuListItem ">Home</Link>
                <Link activeClass="active" smooth spy to="portfolio" className="desktopMenuListItem ">Portfolio</Link>
                <Link activeClass="active" smooth spy to="about" className="desktopMenuListItem">Technologies</Link>
                <Link activeClass="active" smooth spy to="about" className="desktopMenuListItem">About</Link>
            </div>
            <a href="mailto:daniel@sarjomaa.no">
              <button className="desktopMenuBtn bread">
                <img src={contactImg} alt="Contact_Me" className="desktopMenuImg"/>
              </button>
            </a>

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