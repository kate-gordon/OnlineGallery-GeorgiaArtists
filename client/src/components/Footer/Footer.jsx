import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import { MdFavorite } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';

const Footer = () => {
  return (
    <>
      <Grid
        borderTop='solid'
        className='header'
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        m={4}
        p={4}
      >
        <Box d='flex' alignItems='center' justifyContent='center'>
          Built with {'  '} <Box as={MdFavorite} /> {'  '} by
        </Box>
        <Box d='flex' alignItems='center' justifyContent='center'>
          <a
            style={{ color: 'black', textDecoration: 'none' }}
            target='_blank'
            href='https://github.com/pujafitz'
          >
            Puja Fitzpatrick {'  '}
            <Box as={GoMarkGithub} />
          </a>
        </Box>
        <Box p={1} d='flex' alignItems='center' justifyContent='center'>
          <a
            style={{ color: 'black', textDecoration: 'none' }}
            target='_blank'
            href='https://github.com/kate-gordon'
          >
            Kate Gordon {'  '}
            <Box as={GoMarkGithub} />
          </a>
        </Box>
        <Box d='flex' alignItems='center' justifyContent='center'>
          <a
            style={{ color: 'black', textDecoration: 'none' }}
            target='_blank'
            href='https://github.com/cmkemp52'
          >
            Christopher Kemp {'  '}
            <Box as={GoMarkGithub} />
          </a>
        </Box>
      </Grid>
    </>
  );
};

export default Footer;
