import React from 'react';
import './App.css';
import { ThemeProvider } from '@chakra-ui/core';
import Artists from '../src/components/pages/Artists';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <h1>The Georgia Artists With DisAbilities Gallery</h1>
        <Artists />
      </ThemeProvider>
    </div>
  );
}

export default App;
