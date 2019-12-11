import React from 'react';
import { Link } from '@chakra-ui/core';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navList'>
        <li>
          <Link to='/home' className='navListItem'>
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
