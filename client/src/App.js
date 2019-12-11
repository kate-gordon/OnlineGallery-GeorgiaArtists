import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'; 

import './App.css';
import { ThemeProvider, Grid } from '@chakra-ui/core';
import Artists from '../src/components/pages/Artists';
import SingleArtist from '../src/components/pages/SingleArtist';

// import Events from '../src/components/pages/Events';
// import Header from '../src/components/Header';
import Home from '../src/components/pages/Home';
import Cart from '../src/components/pages/Cart';
import About from '../src/components/pages/About';
import Events from '../src/components/pages/Events';


function App() {
  const [artists, setArtists] =useState([]); 

  const fetchData = () => {
    let uri = "http://admin.insae.org/artists/all";
     axios.get(uri)
    .then(data => {
      setArtists(data.data); 
  }).catch ( error => console.log(error))
}; 

  useEffect(() => {
    fetchData(); 
}, []); 

  return (
    <div className='App'>
      <ThemeProvider>
        <h1>The Georgia Artists with DisAbilities Gallery</h1>
        <Grid p={20} templateColumns='repeat(3, 1fr)' gap={6}>
          {/* <Header /> */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/artists/artist/:id'>
            <SingleArtist />
            </Route>
          <Route path='/artists'>
            <Artists artists={artists} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          </Switch>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
