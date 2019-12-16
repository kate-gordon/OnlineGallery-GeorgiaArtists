import React from 'react';
import { Link } from 'react-router-dom';
import ArtPieceCard from '../../Cards/ArtPieceCard';

import { Box } from '@chakra-ui/core';

const Home = props => {
  const { artPieces } = props;

  return (
    <>
      <Link to='/cart'>Cart Link</Link>
      <Box d='flex'>
        {artPieces.map((artpiece, id) => {
          return <ArtPieceCard key={artPieces[id].id} piece={artPieces[id]} />;
        })}
      </Box>
    </>
  );
};

export default Home;
