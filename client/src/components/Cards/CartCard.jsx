import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context';

import { Box, Button, Image, IconButton } from '@chakra-ui/core';

const CartCard = props => {
  const { piece } = props;
  const [value, dispatch] = useContext(StateContext);
  const handleClick = e => {
    dispatch({
      type: 'removeCartItem',
      item: piece
    });
  };

  return (
    <>
      {piece.title}
      <IconButton
        className='iconBtn'
        onClick={handleClick}
        aria-label='Remove from Cart'
        size='xs'
        icon='add'
        value={piece}
      />
    </>
  );
};

export default CartCard;
