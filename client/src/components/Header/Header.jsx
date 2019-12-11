import React from 'react';
import { Box, Button, Grid, Image, Text } from '@chakra-ui/core';

import logo from './logo.png';
import Navbar from './Navbar/Navbar';

import './header.css';

const Header = () => {
  return (
    <>
      <Grid p={20} templateColumns='repeat(3, 1fr)' gap={6}>
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
        <Navbar />
      </Grid>
    </>
  );
};

export default Header;
