import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import { Box, Image, Text } from '@chakra-ui/core';

const EventCard = props => {
  const { event } = props;
  return (
    <>
      <Box
        m={3}
        p={3}
        width='90%'
        boxShadow='4px 4px 2px 2px grey'
        backgroundColor='gray.200'
      >
        <Box d='flex' p={2}>
          <Box
            width='80px'
            height='80px'
            bg='white'
            borderStyle='solid'
            borderColor='black'
            d='flex'
            justifyContent='center'
            alignItems='center'
            p={2}
            m={2}
          >
            <Text fontSize='3xl'>
              <Moment date={event.datewhen} format='MMM D' />
            </Text>
          </Box>
          <Text fontSize='3xl'>{event.title}</Text>
        </Box>
        <Box>
          <Image width='70%' src={event.picture} />
        </Box>
        <Text fontSize='2xl'>
          <Moment date={event.datewhen} format='h:mm a' tz='Europe/London' />
        </Text>
        <Box>
          <Text fontSize='xl'>{event.location}</Text>
        </Box>
        <Box>
          <Text fontSize='lg'>{event.blurb}</Text>
        </Box>
      </Box>
    </>
  );
};

export default EventCard;
