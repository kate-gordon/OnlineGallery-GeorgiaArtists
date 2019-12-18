import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navList'>
        <li>
          <NavLink
            activeStyle={{ color: "#021714", fontSize: "1.728em" }}
            to='/'
            exact
            className='navListItem'
          >
            GALLERY
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/artists'
            activeStyle={{ color: "#021714", fontSize: "1.728em" }}
            className='navListItem'
          >
            ARTISTS
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/about'
            activeStyle={{ color: "#021714", fontSize: "1.5em" }}
            className='navListItem'
          >
            ABOUT US
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/events'
            className='navListItem'
            activeStyle={{ color: "#021714", fontSize: "1.5em" }}
          >
            EVENTS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
