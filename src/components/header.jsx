import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import './css/header.css';

const Mobile = props => {
    return <header className="mobile">
        <h1>My Awesome Blog</h1>

    </header>
}


const Desktop = props => {
    return <header className="desktop">
        <img src={logo}/>
        <h1>Musical Memoirs</h1>
        <ul className="right">
            <Link to='/portfolio'><li>Portfolio</li></Link>
            <a href='#contact'><li>Contact</li></a>
            <a href="#newsletter"><li>About Us</li></a>

        </ul>
    </header>
}

export const Header = props => {

    useEffect(() => {
    })

    return (window.innerWidth <= 480 ? <Mobile /> : <Desktop />);
}

