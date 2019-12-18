import React from "react";

import { Box, Grid, Flex, Image } from "@chakra-ui/core";
import "./about.css";
import gawdlogo from "./gawdlogo.png";

const About = () => {
  return (
    <>
      <Grid
        height='80vh'
        className='header'
        templateColumns='repeat(3, 40% 20% 40%)'
      >
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          p={4}
          m={2}
        >
          <h1>Georgia Artists with DisAbilities</h1>
          Georgia Artists with DisAbilities was founded in 1985, with a main
          goal to identify those disabled citizens of Georgia who are creative,
          capable, and talented in the arts, so that their achievements and
          talents can be recognized. There are many disabled artists in Georgia
          who have visions and dreams, but have no way of making it a reality.
          We help make it a reality for them.
        </Flex>
        <Box d='flex' alignItems='center' justifyContent='center'>
          <Image
            src={gawdlogo}
            rounded='full'
            alt='logo from G.A.W.D. website'
            width='100px'
            objectFit='contain'
          />
        </Box>
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          p={4}
          m={2}
        >
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
        </Flex>
      </Grid>
    </>
  );
};

export default About;
