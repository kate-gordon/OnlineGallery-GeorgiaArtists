import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@chakra-ui/core';

import Home from '../src/components/pages/Home';
import Header from '../src/components/Header/Header';
import Artists from '../src/components/pages/Artists';
import Cart from '../src/components/pages/Cart';
import About from '../src/components/pages/About';
import Events from '../src/components/pages/Events';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
