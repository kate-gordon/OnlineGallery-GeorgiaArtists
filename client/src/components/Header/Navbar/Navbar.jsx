import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navList'>
        <li>
          <Link Link to='/' className='navListItem'>
            GALLERY
          </Link>
        </li>

        <li className='navListItem'>
          <Link to='/artists'>ARTISTS</Link>
        </li>

        <li className='navListItem'>
          <Link to='/about'>ABOUT US</Link>
        </li>

        <li className='navListItem'>
          <Link to='/events'>EVENTS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
