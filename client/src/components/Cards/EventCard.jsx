import React from 'react'
import Moment from 'react-moment'

import { Box, Image } from '@chakra-ui/core'

const EventCard = props => {
  const { event } = props
  return (
    <>
      <Box
        m={3}
        width='100%'
        borderColor='blue'
        borderStyle='solid'
        boxShadow='4px 4px 2px 2px grey'
      >
        <Box d='flex' p={3}>
          <Box
            width='80px'
            height='80px'
            bg='white'
            borderStyle='solid'
            borderColor='black'
            d='flex'
            justifyContent='center'
            alignItems='center'
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
        <h3>
          <Moment date={event.datewhen} format='MMM D h: mm A' />
        </h3>
        <Box>
          <p>{event.blurb}</p>
        </Box>
        <Box>
          <p>{event.location}</p>
        </Box>
      </Box>
    </>
  )
}

export default EventCard
