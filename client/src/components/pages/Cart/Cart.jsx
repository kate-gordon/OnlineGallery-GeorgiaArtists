import React, { useContext } from 'react';
import { StateContext } from '../../../context';
import { Box, Grid, Heading, IconButton, Text } from '@chakra-ui/core';
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
      <Grid templateColumns='3fr 1fr' gap={6} height='100vh'>
        <Box d='flex' p={4}>
          {!cartArray[0] ? (
            <Text fontSize='2xl' fontFamily='fira-sans'>
              Your cart is empty.
            </Text>
          ) : (
            <>
              {' '}
              <Heading as='h1' fontSize='2xl' fontFamily='fira-sans'>
                Your Cart:{' '}
              </Heading>{' '}
              <br />
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
