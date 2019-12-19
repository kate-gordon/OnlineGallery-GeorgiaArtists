import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { StateContext } from "../../../context";
import { useRouteMatch } from "react-router-dom";
import {
  Box,
  Grid,
  Image,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@chakra-ui/core";

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
    fetchArtPiece();
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
      <Grid height="100vh" templateColumns="repeat(2, 1fr)" gap={6}>
        <Box d="flex" alignItems="center" justifyContent="center">
          <Image src={artPiece.picture} htmlWidth="100%" htmlHeight="auto" />
        </Box>
        <Box
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <h1>{artPiece.title}</h1>
          <h2>{artPiece.medium}</h2>
          <h2>
            By {artPiece.firstname} {artPiece.lastname}
          </h2>
          <h3>Awarded {artPiece.award}</h3>
          <h3>${artPiece.price}</h3>
          {artPiece.sold ? (
            <h2>SOLD</h2>
          ) : (
            <>
              {!cartArray.includes(artPiece.artwork_id) ? (
                <Popover trigger="hover">
                  <PopoverContent>
                    <p>Add to Cart</p>
                  </PopoverContent>
                  <PopoverTrigger>
                    <IconButton
                      className="iconBtn"
                      onClick={handleAddClick}
                      aria-label="Add to cart"
                      size="md"
                      icon="add"
                      value={artPiece}
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
                      size="md"
                      icon="minus"
                      value={artPiece}
                    />
                  </PopoverTrigger>
                </Popover>
              )}
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default SingleArtPiece;
