import React from "react";
import { Link } from 'react-router-dom';
import { Box, Image, IconButton } from "@chakra-ui/core";

const SingleArtPiece = () => {
  return (
    <>
      <Box>
        <Image src='https://dummyimage.com/300x200/000/fff' size='lg' />
      </Box>
      <Box>
        <h1>Title</h1>
        <h2>By Artist Name</h2>
        <h3>$400</h3>
      </Box>
      <IconButton aria-label='Add to cart' size='xs' icon='add'>
        <Link to={`/gallery/${piece.title}`} /> 
      </IconButton>
    </>
  );
};

export default SingleArtPiece;
