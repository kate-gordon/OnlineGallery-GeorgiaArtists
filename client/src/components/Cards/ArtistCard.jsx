import React from 'react';
import { Link } from 'react-router-dom';

import { Box, IconButton, Image } from '@chakra-ui/core';
import { MdMoreHoriz } from 'react-icons/md';

const ArtistCard = props => {
  const { artist } = props;

  return (
    <>
      <Box
        d='flex'
        flexDirection='column'
        boxShadow='4px 4px 2px 2px grey'
        width='90%'
        m={3}
        style={{ backgroundColor: '#E5E2DD' }}
      >
        <Box p={2}>
          <h1 style={{ borderBottom: '1px solid black' }}>
            {artist.firstname} {artist.lastname}
          </h1>
          <Image
            size='200px'
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
            <IconButton
              icon={MdMoreHoriz}
              bg='gray.600'
              color='gray.50'
              variant='solid'
              size='lg'
            ></IconButton>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ArtistCard;
