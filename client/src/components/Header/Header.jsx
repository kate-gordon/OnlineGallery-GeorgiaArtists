import React from 'react';
import { Box, Button, Grid, Flex, Image } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import palettelogo from './palettelogo.png';
import gawdlogo from './gawd_logo.png';
import Navbar from './Navbar/Navbar';
import { MdShoppingCart } from 'react-icons/md';

import './header.css';

const Header = () => {
  return (
    <>
      <Grid
        className='header'
        templateColumns='1fr 2fr 1fr'
        gridTemplateRows='1fr'
      >
        <Flex gridRow='1'>
          <Link to='/' className='orgName'>
            <Image
              src={gawdlogo}
              alt='Georgia Artists with DisAbilities logo'
              width='60%'
              objectFit='contain'
            />
          </Link>
        </Flex>
        <Box gridColumn='2' gridRow='2'>
          <Image
            src={palettelogo}
            alt='solid dark gray artist palette logo'
            width='100px'
            objectFit='contain'
          />
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
              _hover={{
                bg: 'gray.200',
                color: 'gray.900',
                cursor: 'pointer'
              }}
            >
              Cart
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid className='navbar' templateColumns='1fr 4fr 1fr'>
        <Box
          d='inline-block'
          alignItems='center'
          justifyContent='space-around'
          p={2}
          gridColumn='2'
        >
          <Navbar />
        </Box>
      </Grid>
    </>
  );
};

export default Header;
