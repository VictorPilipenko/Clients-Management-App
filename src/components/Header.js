import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>Project X</h2>
        <h4>Clients Management App</h4>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/help' activeClassName='activeNav'>Help</NavLink>
        </div>
    </header>
);

export default Header;