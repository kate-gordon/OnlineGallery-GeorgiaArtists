import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useRouteMatch } from "react-router-dom";
import { Box, Image, IconButton } from "@chakra-ui/core";

const SingleArtPiece = () => {
  const [artPiece, setArtPiece] = useState([]);

  let match = useRouteMatch("/piece/:id");
  const id = match.params.id;

  const fetchArtPiece = () => {
    let uri = `http://admin.insae.org/api/artworks/id/${id}`;
    axios
      .get(uri)
      .then(data => {
        setArtPiece(data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchArtPiece();
  }, []);

  return (
    <>
      <Box>
        <Image src={artPiece.picture} size='lg' />
      </Box>
      <Box>
        <h1>{artPiece.title}</h1>
        <h2>
          By {artPiece.firstname} {artPiece.lastname}
        </h2>
        <h3>${artPiece.price}</h3>
      </Box>
      <IconButton aria-label='Add to cart' size='xs' icon='add'></IconButton>
    </>
  );
};

export default SingleArtPiece;
