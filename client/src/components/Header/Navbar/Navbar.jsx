import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Box, Text } from "@chakra-ui/core";
import "./navbar.css";

const Navbar = () => {
  return (
    <Box
      fontSize={["sm", "md", "lg", "xl"]}
      d='flex'
      flexDirection={["column", "column", "row", "row"]}
      alignItems='center'
      justifyContent='space-around'
    >
      <Text>
        <NavLink
          activeStyle={{ color: "#021714", fontSize: "1.728em" }}
          to='/'
          exact
          className='navListItem'
        >
          gallery
        </NavLink>
      </Text>

      <Text>
        <NavLink
          to='/artists'
          activeStyle={{ color: "#021714", fontSize: "1.728em" }}
          className='navListItem'
        >
          artists
        </NavLink>
      </Text>

      <Text>
        <NavLink
          to='/about'
          activeStyle={{ color: "#021714", fontSize: "1.728em" }}
          className='navListItem'
        >
          about us
        </NavLink>
      </Text>

      <Text>
        <NavLink
          to='/events'
          className='navListItem'
          activeStyle={{ color: "#021714", fontSize: "1.728em" }}
        >
          events
        </NavLink>
      </Text>
    </Box>
  );
};

export default Navbar;
