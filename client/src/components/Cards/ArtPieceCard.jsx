import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context";

import {
  Box,
  Button,
  Image,
  IconButton,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent
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
      <h2>SOLD</h2>
    ) : (
      <Box
        d="flex"
        p={2}
        borderStyle="solid"
        style={{ color: "#021714", backgroundColor: "#F0F0F0" }}
      >
        <h2>${piece.price}</h2>
        {!cartArray.includes(piece.artwork_id) ? (
          <Popover trigger="hover">
            <PopoverContent>
              <p>Add to Cart</p>
            </PopoverContent>
            <PopoverTrigger>
              <IconButton
                className="iconBtn"
                onClick={handleAddClick}
                aria-label="Add to cart"
                size="xs"
                icon="add"
                value={piece}
              />
            </PopoverTrigger>
          </Popover>
        ) : (
          <Popover trigger="hover">
            <PopoverContent>
              <p>Remove from Cart</p>
            </PopoverContent>
            <PopoverTrigger>
              <IconButton
                className="iconBtn"
                onClick={handleRemoveClick}
                aria-label="Add to cart"
                size="xs"
                icon="minus"
                value={piece}
              />
            </PopoverTrigger>
          </Popover>
        )}
      </Box>
    )
  ) : null;

  const growCard = hover ? { transform: "scale(1.2)" } : null;

  return (
    <>
      <Box
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        width="90%"
        height="auto"
        p={2}
        m={2}
      >
        <Box position="relative">
          <Link to={`/piece/${piece.artwork_id}`}>
            <Image
              style={growCard}
              htmlWidth="100%"
              htmlHeight="auto"
              src={piece.picture}
              alt={piece.title}
              boxShadow="4px 4px 2px 2px grey"
            />
          </Link>
          <Box position="absolute" right="0" top="0">
            {addToCartBox}
          </Box>
        </Box>
        <Box
          d="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="3xl">{piece.title}</Text>
          <Text fontSize="2xl">
            By {piece.firstname} {piece.lastname}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ArtPieceCard;
