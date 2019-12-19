import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import { Box, Image, Grid } from "@chakra-ui/core";

const SingleArtist = () => {
  const [artist, setArtist] = useState([]);
  const [artistWork, setArtistWork] = useState([]);

  console.log(artistWork);

  useEffect(() => {
    fetchArtist();
    fetchArtistWork();
  }, []);

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

  // Get art pieces by the specific artist

  const fetchArtistWork = () => {
    let uri = `http://admin.insae.org/api/artworks/artist/${id}`;
    axios
      .get(uri)
      .then(data => {
        // console.log(data.data);
        setArtistWork(data.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Grid height='100vh' templateColumns='repeat(2, 1fr)' gap={6}>
        <Box
          d='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='90%'
        >
          <h1>
            {artist.firstname} {artist.lastname}
          </h1>
          <Image size='300px' rounded='full' alt='' src={artist.portrait} />
          <h3>{artist.city}, GA</h3>
        </Box>
        <Box
          d='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='90%'
        >
          <p>{artist.blurb}</p>
          <Link to={`/piece/${artistWork.artwork_id}`}>
            <Image
              htmlWidth='50%'
              htmlHeight='auto'
              alt=''
              src={artistWork.picture}
              p={4}
            />
          </Link>
          <h3>{artistWork.title}</h3>
        </Box>
      </Grid>
    </>
  );
};

export default SingleArtist;
