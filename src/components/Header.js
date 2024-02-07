import React from 'react';

import './Header.css';


function Header() {
    return (
        <header className="header">
            <div className='logo-div'>
                <img src={require('../assets/logos/safesportlogo.png')} className="logo" alt="Main Logo" />
            </div>



        </header>
    );
}

export default Header;
