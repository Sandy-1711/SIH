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
                    <li><a href="/SIH/#about">About</a></li>
                    <li><a href="/SIH/#services">Services</a></li>
                    <li><a href="/SIH/#team">Team</a></li>
                    <li><a href="/SIH/#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </header>)
}