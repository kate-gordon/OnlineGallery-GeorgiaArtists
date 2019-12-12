import React from 'react';
import { Box, Button, Image } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import logo from './logo.png';
import Navbar from './Navbar/Navbar';
import { MdShoppingCart } from 'react-icons/md';

import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContent'>
        <Box>
          <Link to='/'>Georgia Artists with DisAbilities</Link>
        </Box>
        <Box>
          <Image
            src={logo}
            alt='artist palette with colorful paint logo'
            width='250px'
            objectFit='contain'
          />
        </Box>
        <Box>
          <Link to='/cart' className='cartButton'>
            <Button size='xs'>
              <MdShoppingCart />
              Cart
            </Button>
          </Link>
        </Box>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
