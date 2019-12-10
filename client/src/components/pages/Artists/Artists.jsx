import React from 'react';
import ArtistCard from '../../Cards/ArtistCard'; 

// import loadData from '../../../utils/loadData'; 
import axios from 'axios'; 
import './artists.css';
import Axios from 'axios';
const Artists = () => {

const fetchData = () => {
    let uri = "http://admin.insae.org/artists/all";
    axios.get(uri)
    .then(data => {
      console.log(data.data)
    }).catch ( error => console.log(error))
  };

  fetchData(); 

  return (
    <>
     {/* {artistData.map((el, id) => {
        return (
        <ArtistCard artist={artistData[id]}/>
        ); 
      })} */}
    
    </>
  );
};

export default Artists;
