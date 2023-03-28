import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/order">Shop</a>
            <a href="/review">Orders</a>
            <a href="/inventory">Manage Enventory</a>
            <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;