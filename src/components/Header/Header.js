import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav-bar">
                <h2 className="logo-text">Tech<span style={{ color: 'white' }}>Hub</span></h2>
                <ul className="nav-items">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact us">Contact Us</a></li>
                </ul>
            </nav>
            <div className="heading">
                <h1>Biggest Collaboration Of Tech Geniuses</h1>
                <h1>Contact us to take a part in it</h1>
                <h2>Total Budget: 200 million$</h2>
            </div>
        </div>
    );
};

export default Header;