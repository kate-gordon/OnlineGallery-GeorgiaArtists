import React, { useContext } from 'react';
import { StateContext } from '../../../context';
import { Box, Grid } from '@chakra-ui/core';
// import CheckoutForm from './CheckoutForm/CheckoutForm';
import Checkout2 from './CheckoutForm/Checkout2';

import './cart.css';

const Cart = () => {
  const [{ cart }] = useContext(StateContext);
  // console.log(value);
  // const cartArray = value.cart || [];
  const cartArray = cart || [];
  const cartLi =
    cartArray.map((item, key) => <li key={key}>{item.title}</li>) || null;

  // console.log(value);
  return (
    <>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} height='100vh'>
        <Box p={4}>
          <h1>Your Cart</h1>
          <ul>{cartLi}</ul>
        </Box>
        <Box p={4}>
          <Checkout2 />
        </Box>
      </Grid>
    </>
  );
};

export default Cart;
