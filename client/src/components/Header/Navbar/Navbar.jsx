import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navList'>
        <li>
          <NavLink
            activeStyle={{ color: 'pink', fontWeight: 'bold' }}
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
            activeStyle={{ color: 'pink' }}
            className='navListItem'
          >
            ARTISTS
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/about'
            activeStyle={{ color: 'pink' }}
            className='navListItem'
          >
            ABOUT US
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/events'
            className='navListItem'
            activeStyle={{ color: 'pink' }}
          >
            EVENTS
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
