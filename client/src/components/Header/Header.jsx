import React from 'react';
import { Box, Button, Grid, Flex, Image, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import palette2 from './palette2.svg';
import Navbar from './Navbar/Navbar';
import { MdShoppingCart } from 'react-icons/md';

import './header.css';

const Header = () => {
  return (
    <Grid
      className='header'
      templateColumns='repeat(3, 25% 50% 25%)'
      gridTemplateRows='repeat(, 1fr)'
    >
      <Flex gridRow='1'>
        <Link to='/' className='orgName'>
          <Text fontSize='2xl'>Georgia Artists with DisAbilities</Text>
        </Link>
      </Flex>
      <Box gridColumn='2' gridRow='2'>
        <Image
          src={palette2}
          alt='artist palette with colorful paint logo'
          width='100px'
          objectFit='contain'
        />
        <Navbar />
      </Box>
      <Box
        d='flex'
        alignItems='center'
        justifyContent='center'
        p={4}
        gridRow='1'
        gridColumn='3'
      >
        <Link to='/cart' className='cartButton'>
          <Button
            rightIcon={MdShoppingCart}
            bg='gray.600'
            color='gray.50'
            variant='solid'
            size='lg'
          >
            Cart
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default Header;
