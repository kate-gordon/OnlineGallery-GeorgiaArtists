import React from 'react';
import { Box } from '@chakra-ui/core';

const EventCard = props => {
  return (
    <>
      <Box p={1} height='80vh' borderColor='blue' borderStyle='solid'>
        <Box
          width='100px'
          height='100px'
          bg='white'
          borderStyle='solid'
          borderColor='black'
        >
          <h2>Dec 10</h2>
        </Box>
        <Box>
          <h1>Gallery Showing</h1>
        </Box>
        <Box>
          <h2>Image here</h2>
        </Box>
        <Box>
          <p>Event description</p>
        </Box>
        <Box>
          <p>Event Address</p>
        </Box>
      </Box>
    </>
  );
};

export default EventCard;
