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
      item: piece
    });
  };

  return (
    <>
      <Box width='100%' p={2} m={2}>
        <Box width='90%' position='relative'>
          <Link to={`/piece/${piece.artwork_id}`}>
            <Image
              htmlWidth='100%'
              htmlHeight='300px'
              src='https://via.placeholder.com/350'
              alt={piece.title}
              boxShadow='4px 4px 2px 2px grey'
            />
          </Link>
          <Box position='absolute' right='0' top='0'>
            {piece.sold ? (
              <h2>SOLD</h2>
            ) : (
              <Box d='flex'>
                <h2>{piece.price}</h2>
                <IconButton
                  onClick={handleClick}
                  aria-label='Add to cart'
                  size='xs'
                  icon='add'
                  value={piece}
                />
              </Box>
            )}
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
