import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { StateContext } from "../../../context";
import { Link, useRouteMatch } from "react-router-dom";
import { Box, Grid, Image, IconButton } from "@chakra-ui/core";

const SingleArtPiece = () => {
  const [artPiece, setArtPiece] = useState([]);
  const [value, dispatch] = useContext(StateContext);

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

  const handleClick = e => {
    dispatch({
      type: "addCartItem",
      item: artPiece
    });
  };

  return (
    <>
      <Grid height='100vh' templateColumns='repeat(2, 1fr)' gap={6}>
        <Box d='flex' alignItems='center' justifyContent='center'>
          <Image src={artPiece.picture} size='lg' />
        </Box>
        <Box
          d='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <h1>{artPiece.title}</h1>
          <h2>
            By {artPiece.firstname} {artPiece.lastname}
          </h2>
          <h3>${artPiece.price}</h3>
          <IconButton
            onClick={handleClick}
            aria-label='Add to cart'
            size='xs'
            icon='add'
          />
        </Box>
      </Grid>
    </>
  );
};

export default SingleArtPiece;
