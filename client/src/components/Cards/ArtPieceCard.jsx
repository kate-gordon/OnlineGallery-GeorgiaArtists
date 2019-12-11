import React from "react";
import { Box, Image, IconButton } from "@chakra-ui/core";

const ArtPieceCard = props => {
  const { piece } = props;

  return (
    <Box size='sm' p={2}>
      <Image
        htmlWidth='450px'
        htmlHeight='200px'
        src={piece.portrait}
        alt={piece.title}
      />
      <IconButton aria-label='Add to cart' size='xs' icon='add'></IconButton>
      <Box>
        <h1>{piece.title}</h1>
        <h2>${piece.price}</h2>
      </Box>
      <Box>
        <h2>By {piece.firstname} {piece.lastname}</h2>
      </Box>
    </Box>
  );
};

export default ArtPieceCard;
