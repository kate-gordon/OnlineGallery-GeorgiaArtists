import React, { useState, useEffect } from 'react';
import ArtistCard from '../../Cards/ArtistCard'; 

import axios from 'axios'; 
import './artists.css';

const Artists = () => {
  const [artists, setArtists] =useState([]); 

  const fetchData = () => {
    let uri = "http://admin.insae.org/artists/all";
     axios.get(uri)
    .then(data => {
      setArtists(data.data); 
  }).catch ( error => console.log(error))
}; 

  useEffect(() => {
    const artistData = fetchData(); 
}, []); 


  return (
    <>
     {artists.map((artist, id)=> {
        return (
        <ArtistCard key={artists[id].id} artist={artists[id]}/>
        ); 
      })}
    </>
  );
};

export default Artists;


