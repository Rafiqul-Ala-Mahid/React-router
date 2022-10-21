import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='title'>
                    <h3>Contest</h3>
                </div>
                <div className='refer'>
                    <Link to='/'>Home</Link>
                    <Link to='/tutorial'>Tutorial</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;