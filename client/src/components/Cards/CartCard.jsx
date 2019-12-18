import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context';

import { Box, Button, Image, IconButton } from '@chakra-ui/core';

const CartCard = props => {
  const [{ cart }] = useContext(StateContext);
  console.log(cart);
  // const handleClick = e => {
  //   dispatch({
  //     type: 'addCartItem',
  //     item: piece
  //   });
  // };

  return (
    <>
      <Box></Box>
    </>
  );
};

export default CartCard;
