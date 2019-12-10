import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to='/home'>GALLERY</NavLink>
        </li>
        <li>
          <NavLink to='/artists'>ARTISTS</NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='/events'>EVENTS</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
