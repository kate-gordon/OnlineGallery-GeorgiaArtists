import React from 'react';
import ArtistCard from '../../Cards/ArtistCard'; 

import loadData from '../../../utils/loadData'; 

import './artists.css';
const Artists = () => {

  // async function fetchData() {
  //   let uri = "http://admin.insae.org/artists/all";
  //   const data = await loadData(uri);
  //   console.log(data); 
  //   return data
  // };

  // fetchData(); 

  return (
    <>
     {/* {artistData.map((el, id) => {
        return (
        <ArtistCard artist={artistData[id]}/>
        ); 
      })} */}
      <ArtistCard /> 
    </>
  );
};

export default Artists;
