import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context";

import {
  Box,
  IconButton,
  Image,
  Badge,
  Text,
  Tooltip
} from "@chakra-ui/core";

const ArtPieceCard = props => {
  const [{ cart }] = useContext(StateContext);
  let cartArray = [];
  cart.map(item => cartArray.push(item.artwork_id));
  const { piece } = props;
  const [value, dispatch] = useContext(StateContext);
  const [hover, setHoverState] = useState(false);

  const handleAddClick = e => {
    dispatch({
      type: "addCartItem",
      item: piece
    });
  };
  const handleRemoveClick = e => {
    dispatch({
      type: "removeCartItem",
      item: piece
    });
  };

  const onHover = () => {
    setHoverState(!hover);
  };

  const addToCartBox = hover ? (
    piece.sold ? (
      <Badge
        color='red.600'
        style={{
          color: "gray.900",
          backgroundColor: "gray.100",
          fontSize: "1.2em",
          padding: "20px"
        }}
        _hover={{ color: "gray.900", backgroundColor: "gray.100" }}
      >
        SOLD
      </Badge>
    ) : (
      <Badge
        style={{
          color: "gray.900",
          backgroundColor: "gray.100",
          fontSize: "1.3em",
          padding: "20px"
        }}
        _hover={{ color: "gray.900", backgroundColor: "gray.100" }}
      >
        ${piece.price}{" "}
        {!cartArray.includes(piece.artwork_id) ? (
          <Tooltip hasArrow label='Add to Cart' placement='top' bg='cyan.700'>
            <IconButton
              bg='gray.600'
              color='gray.50'
              className='iconBtn'
              onClick={handleAddClick}
              aria-label='Add to cart'
              size='sm'
              icon='add'
              value={piece}
              _hover={{ color: "gray.600", bg: "gray.50" }}
            />
          </Tooltip>
        ) : (
          <Tooltip
            hasArrow
            label='Remove from Cart'
            placement='top'
            bg='red.600'
          >
            <IconButton
              bg='gray.600'
              color='gray.50'
              className='iconBtn'
              onClick={handleRemoveClick}
              aria-label='Add to cart'
              size='sm'
              icon='minus'
              value={piece}
            />
          </Tooltip>
        )}
      </Badge>
    )
  ) : null;

  const growCard = hover
    ? { transform: "scale(1.1)", transition: "all 0.2s ease 0s" }
    : null;

  return (
    <>
      <Box
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        style={growCard}
        width='90%'
        height='auto'
        p={2}
        m={2}
      >
        <Box position='relative'>
          <Link to={`/piece/${piece.artwork_id}`}>
            <Image
              htmlWidth='100%'
              htmlHeight='auto'
              src={piece.picture}
              alt={piece.title}
              boxShadow='4px 4px 2px 2px grey'
            />
          </Link>
          <Box position='absolute' right='-5%' top='-5%'>
            {addToCartBox}
          </Box>
        </Box>
        <Box
          d='flex'
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='flex-start'
        >
          <Text fontSize='3xl' fontFamily='fira-sans' m={0} textAlign='left'>
            {piece.title}
          </Text>
          <Text fontSize='2xl' fontFamily='fira-sans' m={0} textAlign='left'>
            By: {piece.firstname} {piece.lastname}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ArtPieceCard;
