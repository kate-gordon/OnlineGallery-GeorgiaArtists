import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, Grid } from '@chakra-ui/core';
import { StateProvider } from './context/index';
import Artists from '../src/components/pages/Artists';
import Header from '../src/components/Header/Header';
import Home from '../src/components/pages/Home';
import Cart from '../src/components/pages/Cart';
import About from '../src/components/pages/About';
import Events from '../src/components/pages/Events';
import Footer from '../src/components/Footer/Footer';

function App() {
  const initialState = [];
  return (
    <div className='App'>
      <ThemeProvider>
        <StateProvider initialState={initialState}>
          <Header />
          <Grid p={20} templateColumns='repeat(3, 1fr)' gap={6}>
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
          </Grid>
          <Footer />
        </StateProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
