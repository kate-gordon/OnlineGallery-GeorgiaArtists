import React from "react";

import ArtistCard from "../../Cards/ArtistCard";
import { Grid } from "@chakra-ui/core";
// import "./artists.css";

const Artists = props => {
  const { artists } = props;

  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {artists.map((artist, id) => {
          return (
            <ArtistCard key={artists[id].artist_id} artist={artists[id]} />
          );
        })}
      </Grid>
    </>
  );
};

export default Artists;
