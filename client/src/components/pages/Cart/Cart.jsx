import React, { useContext } from 'react';
import { StateContext } from '../../../context';
import { Box, Grid } from '@chakra-ui/core';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CartCard from '../../Cards/CartCard';

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
          {/*<ul>{cartLi}</ul>*/}
          <CartCard />
        </Box>
        <Box p={4}>
          <CheckoutForm />
        </Box>
      </Grid>
    </>
  );
};

export default Cart;
