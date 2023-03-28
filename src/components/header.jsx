import React, { useEffect } from "react";
import './css/header.css';

const Mobile = props => {
    return <header className="mobile">
        <h1>My Awesome Blog</h1>

    </header>
}


const Desktop = props => {
    return <header className="desktop">
        <ul className="left">

        </ul>
        <h1>Musical Memoirs</h1>
        <ul className="right">
            <li>Portfolio</li>
            <li>Contact</li>
            <li>About Us</li>

        </ul>
    </header>
}

export const Header = props => {

    useEffect(() => {
    })

    return (window.innerWidth <= 480 ? <Mobile /> : <Desktop />);
}

