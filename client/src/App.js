import React from 'react';
import './App.css';
import { ThemeProvider, Grid } from '@chakra-ui/core';
// import Artists from '../src/components/pages/Artists';
import SingleArtist from '../src/components/pages/SingleArtist'; 
// import Events from '../src/components/pages/Events'; 

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
      <h1>The Georgia Artists with DisAbilities Gallery</h1>
      <Grid p={20} templateColumns="repeat(3, 1fr)" gap={6}>
       {/* <Artists />  */}
        <SingleArtist />  
        {/* <Events />  */}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
