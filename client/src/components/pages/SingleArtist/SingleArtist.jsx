import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

import artistImg from "./artistImg.png";

const SingleArtist = () => {
  const [artist, setArtist] = useState([]);
  const [artistWork, setArtistWork] = useState([]);

  // Get artist ID from URL params

  let match = useRouteMatch("/artists/artist/:id");
  const id = match.params.id;

  // Get single artist data

  const fetchArtist = () => {
    let uri = `http://admin.insae.org/api/artists/id/${id}`;
    axios
      .get(uri)
      .then(data => {
        setArtist(data.data);
      })
      .catch(error => console.log(error));
  };

  const fetchArtistWork = () => {
    let uri = `http://admin.insae.org/api/artworks/artist/${id}`;
    axios
      .get(uri)
      .then(data => {
        console.log(data.data);
        setArtistWork(data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchArtist();
    fetchArtistWork();
  }, []);

  return (
    <>
      <h1>
        {artist.firstname} {artist.lastname}
      </h1>
      <h2>{artist.city}, GA</h2>
      <img alt='' src={artist.portrait} />
      <p>{artist.blurb}</p>
      <div role='group' className='imgContainer'>
        <img alt='' src={artistWork.picture} />
        <h3>Art Title</h3>
      </div>
      <div role='group' className='imgContainer'>
        <img alt='' src={artistImg} />
        <h3>Art Title</h3>
      </div>
    </>
  );
};

export default SingleArtist;
