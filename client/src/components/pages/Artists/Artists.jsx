import React from 'react';
import ArtistCard from '../../Cards/ArtistCard'; 

import loadData from '../../../utils/loadData'; 

import './artists.css';
const Artists = () => {

  async function fetchData() {
    let uri = "http://admin.insae.org/artists/all";
    const response = await loadData(uri);
    console.log(response); 
    return response
  };

  fetchData(); 

  return (
    <>
      <ArtistCard /> 
      <ArtistCard /> 
      <ArtistCard /> 
    </>
  );
};

export default Artists;
