import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, Grid } from '@chakra-ui/core';
import Artists from '../src/components/pages/Artists';
// import SingleArtist from '../src/components/pages/SingleArtist';
// import Events from '../src/components/pages/Events';
import Header from '../src/components/Header';
import Home from '../src/components/pages/Home';
import Cart from '../src/components/pages/Cart';
import About from '../src/components/pages/About';
import Events from '../src/components/pages/Events';

function App() {
  const initialState = [];
  return (
    <div className='App'>
      <ThemeProvider>
<<<<<<< HEAD
        <StateProvider initialState={initialState}>
      <h1>The Georgia Artists with DisAbilities Gallery</h1>
      <Grid p={20} templateColumns="repeat(3, 1fr)" gap={6}>   
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/artists'>
          <Artists />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
=======
        <h1>The Georgia Artists with DisAbilities Gallery</h1>
        <Grid p={20} templateColumns='repeat(3, 1fr)' gap={6}>
          <Header />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/artists'>
            <Artists />
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
>>>>>>> 53402ad991f038a74150765465a2ca604718c9cb
        </Grid>
        </StateProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
