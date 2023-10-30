import React from "react";
import './Header.css'
export default function Header() {
    return (<header>
        <div className="headerWrapper">
            <div className="logo">
                <span>SIH</span>
            </div>
            <div className="links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#team">Team</a></li>
                    <li><a href="/#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </header>)
}