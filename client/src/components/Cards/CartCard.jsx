import React, { useContext } from 'react'
import { StateContext } from '../../context'

import { Box, Flex, Image, IconButton, Text, Tooltip } from '@chakra-ui/core'

const CartCard = props => {
  const [{ cart }] = useContext(StateContext)
  let cartArray = []
  cart.map(item => cartArray.push(item.artwork_id))
  const { piece } = props
  const [value, dispatch] = useContext(StateContext)
  const handleClick = e => {
    dispatch({
      type: 'removeCartItem',
      item: piece
    })
  }

  return (
    <>
      <Flex
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
        position='relative'
        boxShadow='4px 4px 2px 2px grey'
        m={4}
        width='80%'
        maxWidth='500px'
        backgroundColor='gray.200'
      >
        <Box>
          <Tooltip
            hasArrow
            label='Remove from Cart'
            placement='top'
            bg='red.600'
          >
            <IconButton
              position='absolute'
              right='4'
              top='4'
              className='iconBtn'
              onClick={handleClick}
              aria-label='Remove from Cart'
              size='sm'
              icon='minus'
              value={piece}
              bg='gray.600'
              color='gray.50'
              _hover={{ color: 'gray.600', bg: 'gray.50' }}
            ></IconButton>
          </Tooltip>

          <Image
            htmlWidth='70%'
            htmlHeight='auto'
            src={piece.picture}
            alt={piece.title}
            p={4}
          />

          <Text fontSize='3xl' fontFamily='fira-sans'>
            {piece.title}
          </Text>
          <Text fontSize='2xl' fontFamily='fira-sans'>
            By: {piece.firstname} {piece.lastname}
          </Text>
          <Text fontSize='xl'>${piece.price}</Text>
        </Box>
      </Flex>
    </>
  )
}

export default CartCard
