import React from "react";

import ArtistCard from "../../Cards/ArtistCard";
import "./artists.css";

const Artists = props => {
  const { artists } = props;

  return (
    <>
      {artists.map((artist, id) => {
        return <ArtistCard key={artists[id].artist_id} artist={artists[id]} />;
      })}
    </>
  );
};

export default Artists;
