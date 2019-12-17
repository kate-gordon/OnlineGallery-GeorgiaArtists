import React from 'react';

import { Box, Grid } from '@chakra-ui/core';
import './about.css';

const About = () => {
  return (
    <>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} height='100vh'>
        <Box p={4}>
          <h1>Georgia Artists with DisAbilities</h1>
          Georgia Artists with DisAbilities was founded in 1985, with a main
          goal to identify those disabled citizens of Georgia who are creative,
          capable, and talented in the arts, so that their achievements and
          talents can be recognized. There are many disabled artists in Georgia
          who have visions and dreams, but have no way of making it a reality.
          We help make it a reality for them.
        </Box>
        <Box p={4}>
          <h2>Our Mission Statement:</h2>
          <p>
            To provide mediums through which Georgia artists with dsabilities
            can display their artistic accomplishments to all disciplines of the
            arts.
          </p>
          <p>
            To create public awareness of the artistic skills that these artists
            developed by overcoming the obstacles of a disability.
          </p>
        </Box>
      </Grid>
    </>
  );
};

export default About;
