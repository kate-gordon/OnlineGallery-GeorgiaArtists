import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, IconButton, Image, Tooltip } from "@chakra-ui/core";
import { MdMoreHoriz } from "react-icons/md";

const ArtistCard = props => {
  const { artist } = props;
  const [hover, setHoverState] = useState(false);

  const onHover = () => {
    setHoverState(!hover);
  };

  const growCard = hover
    ? { transform: "scale(1.05)", transition: "all 0.2s ease 0s" }
    : null;

  return (
    <>
      <Box
        d='flex'
        flexDirection='column'
        boxShadow='4px 4px 2px 2px grey'
        style={growCard}
        width='90%'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        m={3}
        backgroundColor='gray.200'
      >
        <Box p={2}>
          <h1 style={{ borderBottom: "1px solid black" }}>
            {artist.firstname} <br /> {artist.lastname}
          </h1>
          <Image
            size='170px'
            rounded='full'
            src={artist.portrait}
            alt='artist portrait'
            p={4}
          />
          <h3>{artist.city}, GA</h3>
        </Box>
        <Box p={2}>
          <p>{artist.blurb.substring(0, 200)}...</p>
        </Box>
        <Box p={2} d='flex' justifyContent='flex-end' alignItems='center'>
          <Link to={`/artists/artist/${artist.artist_id}`}>
            <Tooltip label='More info' placement='bottom'>
              <IconButton
                icon={MdMoreHoriz}
                bg='gray.600'
                color='gray.50'
                variant='solid'
                size='lg'
                _hover={{
                  bg: "gray.200",
                  color: "gray.900",
                  cursor: "pointer"
                }}
              ></IconButton>
            </Tooltip>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ArtistCard;
