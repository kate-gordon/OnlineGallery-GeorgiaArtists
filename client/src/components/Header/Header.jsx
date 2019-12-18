import React from "react";
import { Box, Button, Grid, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import palette2 from "./palette2.svg";
import Navbar from "./Navbar/Navbar";
import { MdShoppingCart } from "react-icons/md";

import "./header.css";

const Header = () => {
  return (
    <Grid className='header' templateColumns='repeat(3, 20% 60% 20%)'>
      <Box>
        <h2>
          <Link to='/' className='orgName'>
            Georgia Artists with DisAbilities
          </Link>
        </h2>
      </Box>
      <Box>
        <Image
          src={palette2}
          alt='artist palette with colorful paint logo'
          width='100px'
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
  );
};

export default Header;
