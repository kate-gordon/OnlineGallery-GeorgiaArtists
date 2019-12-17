import React from 'react'
import { Box, Button, Grid, Image } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

import logo from './logo.png'
import Navbar from './Navbar/Navbar'
import { MdShoppingCart } from 'react-icons/md'

import './header.css'

const Header = () => {
  return (
    <Grid templateColumns='repeat(3, 10% 80% 10%)' gap={5}>
      <Box>
        <Link to='/' className='orgName'>
          Georgia Artists with DisAbilities
        </Link>
      </Box>
      <Box>
        <Image
          src={logo}
          alt='artist palette with colorful paint logo'
          width='200px'
          objectFit='contain'
        />
        <Navbar />
      </Box>
      <Box>
        <Link to='/cart' className='cartButton'>
          <Button size='xs'>
            <MdShoppingCart />
            Cart
          </Button>
        </Link>
      </Box>
    </Grid>
  )
}

export default Header
