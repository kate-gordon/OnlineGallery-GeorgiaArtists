import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context";

import { Box, Button, Image, IconButton } from "@chakra-ui/core";

const ArtPieceCard = props => {
  const { piece } = props;
  const [value, dispatch] = useContext(StateContext);
  const [hover, setHoverState] = useState(false);

  const handleClick = e => {
    dispatch({
      type: "addCartItem",
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
      <Box d='flex' style={{ color: "#F9F9F9" }}>
        <h2>${piece.price}</h2>
        <IconButton
          className='iconBtn'
          onClick={handleClick}
          aria-label='Add to cart'
          size='xs'
          icon='add'
          value={piece}
        />
      </Box>
    )
  ) : null;

  return (
    <>
      <Box
        className='withCartBtn'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        width='100%'
        p={2}
        m={2}
      >
        <Box width='90%' position='relative'>
          <Link to={`/piece/${piece.artwork_id}`}>
            <Image
              htmlWidth='100%'
              htmlHeight='300px'
              src={piece.picture}
              alt={piece.title}
              boxShadow='4px 4px 2px 2px grey'
            />
          </Link>
          <Box position='absolute' right='0' top='0'>
            {addToCartBox}
          </Box>
        </Box>
        <Box d='flex' flexDirection='column' alignItems='start'>
          <h1>{piece.title}</h1>
          <h2>
            By {piece.firstname} {piece.lastname}{" "}
          </h2>
        </Box>
        <Button d='none'>
          <Link to={`/piece/${piece.artwork_id}`}>Click Me</Link>
        </Button>
      </Box>
    </>
  );
};

export default ArtPieceCard;
