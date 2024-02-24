import React from "react";
import './navbar.css'
import logo from './img/logo.png'
import contactImg from './img/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Certificates</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>

            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="Contact_Me" className="desktopMenuImg"></img> Contact me
            </button>
        </nav>
    )
}

export default Navbar