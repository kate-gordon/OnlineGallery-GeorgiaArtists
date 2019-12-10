import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@chakra-ui/core';

import Header from '../src/components/Header';
import Home from '../src/components/pages/Home';
import Artists from '../src/components/pages/Artists';
import Cart from '../src/components/pages/Cart';

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
        <Route path='/cart'>
          <Cart />
        </Route>
      </ThemeProvider>
    </div>
  );
}

export default App;
