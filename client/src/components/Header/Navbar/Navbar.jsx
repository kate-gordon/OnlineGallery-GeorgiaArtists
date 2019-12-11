import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Grid, Link } from '@chakra-ui/core';

import './navbar.css';

const Navbar = () => {
  return (
    <>
      <Grid p={20} templateColumns='repeat(4, 1fr)' gap={6}></Grid>
      <ul className='navList'>
        <Box>
          <li className='navListItem'>
            <Link to='/home'>GALLERY</Link>
          </li>
        </Box>
        <Box>
          <li className='navListItem'>
            <NavLink to='/artists'>ARTISTS</NavLink>
          </li>
        </Box>
        <Box>
          <li className='navListItem'>
            <NavLink to='/about'>ABOUT US</NavLink>
          </li>
        </Box>
        <Box>
          <li className='navListItem'>
            <NavLink to='/events'>EVENTS</NavLink>
          </li>
        </Box>
      </ul>
    </>
  );
};

export default Navbar;
