import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context';

import {
  Badge,
  Box,
  Button,
  Image,
  IconButton,
  Stack,
  Text
} from '@chakra-ui/core';

const CartCard = props => {
  const [{ cart }] = useContext(StateContext);
  let cartArray = [];
  cart.map(item => cartArray.push(item.artwork_id));
  const { piece } = props;
  const [value, dispatch] = useContext(StateContext);
  const handleClick = e => {
    dispatch({
      type: 'removeCartItem',
      item: piece
    });
  };

  const removeFromCartBox = (
    <Badge
      color='red.600'
      style={{
        color: 'gray.900',
        backgroundColor: 'gray.100',
        fontSize: '1.2em',
        padding: '20px'
      }}
      _hover={{ color: 'gray.900', backgroundColor: 'gray.100' }}
    ></Badge>
  );
  return (
    <>
      <IconButton
        className='iconBtn'
        onClick={handleClick}
        aria-label='Remove from Cart'
        size='xs'
        icon='minus'
        value={piece}
      />

      <Box
        d='flex'
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        <Stack spacing={2}>
          <Text fontSize='3xl' fontFamily='fira-sans'>
            {piece.title}
          </Text>
          <Text fontSize='2xl' fontFamily='fira-sans'>
            By: {piece.firstname} {piece.lastname}
          </Text>
        </Stack>
        <Image
          htmlWidth='100%'
          htmlHeight='auto'
          src={piece.picture}
          alt={piece.title}
          boxShadow='4px 4px 2px 2px grey'
        />
      </Box>
    </>
  );
};

export default CartCard;
