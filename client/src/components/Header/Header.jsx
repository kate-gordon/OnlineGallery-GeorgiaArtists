import React from 'react';
import { Box, Icon, Image, Link, Text } from '@chakra-ui/core';

import logo from './logo.png';
import Navbar from './Navbar/Navbar';
import { MdShoppingCart } from 'react-icons/md';

import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContent'>
        <Box>
          <Text>Georgia Artists with DisAbilities</Text>
        </Box>
        <Box>
          <Image
            src={logo}
            alt='artist palette with colorful paint logo'
            width='60%'
            objectFit='contain'
          />
        </Box>
        <Box>
          <Link to='/cart'>
            <Icon name='MdShoppingCart' mx='2px' />
            Cart
          </Link>
        </Box>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
