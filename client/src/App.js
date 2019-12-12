import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, ThemeProvider } from '@chakra-ui/core';
import axios from 'axios';

import SingleArtist from '../src/components/pages/SingleArtist';
import Artists from '../src/components/pages/Artists';
import Header from '../src/components/Header/Header';
import Home from '../src/components/pages/Home';
import Cart from '../src/components/pages/Cart';
import About from '../src/components/pages/About';
import Events from '../src/components/pages/Events';
import Footer from '../src/components/Footer/Footer';
import Checkout from '../src/components/pages/Checkout/Checkout';

import './App.css';

function App() {
  const [artists, setArtists] = useState([]);

  const fetchData = () => {
    let uri = 'http://admin.insae.org/api/artists/all';
    axios
      .get(uri)
      .then(data => {
        setArtists(data.data);
      
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <ThemeProvider>
        <Header />
        <Grid p={20} templateColumns='repeat(3, 1fr)' gap={6}>
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
            <Route path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
        </Grid>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
