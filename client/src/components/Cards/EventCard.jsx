import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import { Box, Image } from "@chakra-ui/core";

const EventCard = props => {
  const { event } = props;
  return (
    <>
      <Box
        m={3}
        width='90%'
        boxShadow='4px 4px 2px 2px grey'
        style={{ backgroundColor: "#E5E2DD" }}
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
            <h2>
              <Moment date={event.datewhen} format='MMM D' />
            </h2>
          </Box>
          <h2>{event.title}</h2>
        </Box>
        <Box>
          <Image width='70%' src={event.picture} />
        </Box>
        <h2>
          <Moment date={event.datewhen} format='h:mm a' tz='Europe/London' />
        </h2>
        <Box>
          <h3>{event.location}</h3>
        </Box>
        <Box>
          <p>{event.blurb}</p>
        </Box>
        
      </Box>
    </>
  );
};

export default EventCard;
