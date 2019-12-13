import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context";

import { Box, Button, Image, IconButton } from "@chakra-ui/core";

const ArtPieceCard = props => {
  const { piece } = props;
  const [value, dispatch] = useContext(StateContext);

  const handleClick = e => {
    dispatch({
      type: "addCartItem",
      item: piece,
    });
  };

  return (
    <Box size='sm' p={2}>
      <Image
        htmlWidth='450px'
        htmlHeight='200px'
        src={piece.picture}
        alt={piece.title}
      />
      <IconButton
        onClick={handleClick}
        aria-label='Add to cart'
        size='xs'
        icon='add'
        value={piece}
      ></IconButton>
      <Box>
        <h1>{piece.title}</h1>
        <h2>${piece.price}</h2>
      </Box>
      <Box>
        <h2>
          By {piece.firstname} {piece.lastname}
        </h2>
      </Box>
      <Button>
        <Link to={`/piece/${piece.artwork_id}`}>Click Me</Link>
      </Button>
    </Box>
  );
};

export default ArtPieceCard;
