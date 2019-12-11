import React from 'react';
import { Box, Button, Grid, Image, Text } from '@chakra-ui/core';

import logo from './logo.png';
import Navbar from './Navbar/Navbar';

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
            size='250px'
            objectFit='contain'
          />
        </Box>
        <Box>
          <Button leftIcon='cart' size='xs'>
            Cart
          </Button>
        </Box>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
