import React from 'react';
import './Footer.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Avenir:wght@100;700&display=swap"></link>

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section (Logos) */}
                <div className="footer-logos">
                    <a href="https://www.swimming.ca/en/" target="_blank" rel="noopener noreferrer" className="logo-link">
                        <img className='swim-voll' src={require('../assets/logos/Swim Canada Logo.png')} alt="Logo 1" />
                    </a>
                    <a href="https://athletics.ca/" target="_blank" rel="noopener noreferrer" className="logo-link">
                        <img className='athlCan' src={require('../assets/logos/Athletics Canada Logo.png')} alt="Logo 2" />
                    </a>
                    <a href="https://volleyball.ca/" target="_blank" rel="noopener noreferrer" className="logo-link">
                        <img className='swim-voll' src={require('../assets/logos/Volleyball Canada Logo.jpg')} alt="Logo 3" />
                    </a>
                </div>

                {/* Center Section (Main Logo) */}
                <div className="footer-logo">
                    <img src={require('../assets/logos/safesportlogo.png')} alt="Main Logo" />
                </div>

                {/* Right Section (Email and Phone) */}
                <div className="footer-contact">
                    <p>Email: placeholder@email.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
