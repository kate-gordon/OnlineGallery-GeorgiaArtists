import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Image } from "@chakra-ui/core";

const ArtistCard = props => {
  const { artist } = props;

  return (
    <>
      <Box
        borderStyle='solid'
        d='flex'
        flexDirection='column'
        boxShadow='4px 4px 2px 2px grey'
        width='90%'
        m={6}
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Box p={2}>
          <h1>
            {artist.firstname} {artist.lastname}
          </h1>
          <Image
            size='200px'
            rounded='full'
            src={artist.portrait}
            alt='artist portrait'
          />
          <h3>{artist.city}, GA</h3>
        </Box>
        <Box p={2}>
          <p>{artist.blurb.substring(0, 200)}...</p>
        </Box>
        <Box p={2} d='flex' justifyContent='flex-end'>
          <Button>
            <Link to={`/artists/artist/${artist.artist_id}`}>More Info</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ArtistCard;
