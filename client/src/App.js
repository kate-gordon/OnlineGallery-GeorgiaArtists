import React from 'react';
import './App.css';
import Artists from '../src/components/pages/Artists'; 
// import SingleArtist from '../src/components/pages/SingleArtist'; 

function App() {
  return (
    <div className='App'>
      <h1>The Georgia Artists With DisAbilities Gallery</h1>
      <Artists/> 
      {/* <SingleArtist />  */}
    </div>
  );
}

export default App;
