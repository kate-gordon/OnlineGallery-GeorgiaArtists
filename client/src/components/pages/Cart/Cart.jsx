import React, { useContext } from 'react';
import { StateContext } from '../../../context';
import { Box, Grid, IconButton, Text } from '@chakra-ui/core';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CartCard from '../../Cards/CartCard';

import './cart.css';

const Cart = () => {
  const [{ cart }] = useContext(StateContext);

  const totalPrice = cart.reduce((a, { price }) => a + price, 0);
  // console.log(value);
  // const cartArray = value.cart || [];
  const cartArray = cart || [];
  const cartLi =
    cartArray.map((item, key) => <CartCard piece={item} />) || null;

  // console.log(value);
  return (
    <>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} height='100vh'>
        <Box p={4}>
          {!cartArray[0] ? (
            'Your cart is empty.'
          ) : (
            <>
              {' '}
              <Text fontSize='2xl' fontFamily='fira-sans'>
                Your Cart:{' '}
              </Text>
              <ul>{cartLi}</ul>
            </>
          )}
        </Box>
        <Box p={4}>
          {totalPrice === 0 ? (
            ''
          ) : (
            <Text fontSize='2xl' fontFamily='fira-sans'>
              Cart Total: ${totalPrice}.00
            </Text>
          )}
          <CheckoutForm />
        </Box>
      </Grid>
    </>
  );
};

export default Cart;
