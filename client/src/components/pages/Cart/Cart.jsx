import React, { useContext } from 'react';
import { StateContext } from '../../../context';
import { Box, Grid, IconButton } from '@chakra-ui/core';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CartCard from '../../Cards/CartCard';

import './cart.css';

const Cart = () => {
  const [dispatch] = useContext(StateContext);
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
<<<<<<< HEAD
          {!cartArray[0] ? (
            'Your cart is empty.'
          ) : (
            <>
              {' '}
              <h1>Your Cart:</h1>
              <ul>{cartLi}</ul>
            </>
          )}
=======
          <h1>Your Cart</h1>
          {/*<ul>{cartLi}</ul>*/}
          <CartCard />
>>>>>>> puja-branch
        </Box>
        <Box p={4}>
          {totalPrice === 0 ? '' : <h2>Cart Total: ${totalPrice}</h2>}
          <CheckoutForm />
        </Box>
      </Grid>
    </>
  );
};

export default Cart;
