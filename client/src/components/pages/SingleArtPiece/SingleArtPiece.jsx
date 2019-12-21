import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { StateContext } from "../../../context";
import { useRouteMatch } from "react-router-dom";
import { Box, Grid, Image, IconButton, Text, Tooltip } from "@chakra-ui/core";

const SingleArtPiece = () => {
  const [artPiece, setArtPiece] = useState([]);

  const [value, dispatch] = useContext(StateContext);
  let match = useRouteMatch("/piece/:id");
  const id = match.params.id;
  const [{ cart }] = useContext(StateContext);
  let cartArray = [];
  cart.map(item => cartArray.push(item.artwork_id));

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
    fetchArtPiece(artPiece);
  }, []);

  const handleAddClick = e => {
    dispatch({
      type: "addCartItem",
      item: artPiece
    });
  };
  const handleRemoveClick = e => {
    dispatch({
      type: "removeCartItem",
      item: artPiece
    });
  };

  return (
    <>
      <Grid minHeight='100vh' templateColumns='repeat(2, 1fr)' gap={6}>
        <Box d='flex' alignItems='center' justifyContent='center'>
          <Image src={artPiece.picture} htmlWidth='100%' htmlHeight='auto' />
        </Box>
        <Box
          d='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Text fontSize='3xl' fontFamily='fira-sans' m={0}>
            {artPiece.title}
          </Text>
          <Text fontSize='2xl' fontFamily='fira-sans' m={0}>
            {artPiece.medium}
          </Text>
          <Text fontSize='2xl' fontFamily='fira-sans' m={0}>
            By {artPiece.firstname} {artPiece.lastname}
          </Text>
          <h3>Awarded {artPiece.award}</h3>
          <h3>${artPiece.price}</h3>

          {artPiece.sold ? (
            <h2>SOLD</h2>
          ) : (
            <>
              {!cartArray.includes(artPiece.artwork_id) ? (
                <Tooltip
                  hasArrow
                  label='Add to Cart'
                  placement='top'
                  bg='cyan.700'
                >
                  <IconButton
                    bg='gray.600'
                    color='gray.50'
                    className='iconBtn'
                    onClick={handleAddClick}
                    aria-label='Add to cart'
                    size='md'
                    icon='add'
                    value={artPiece}
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
                    size='md'
                    icon='minus'
                    value={artPiece}
                    _hover={{ color: "gray.600", bg: "gray.50" }}
                  />
                </Tooltip>
              )}
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default SingleArtPiece;
