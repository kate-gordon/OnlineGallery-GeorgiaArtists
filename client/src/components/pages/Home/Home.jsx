import React, { useState, useEffect } from "react";
import ArtPieceCard from "../../Cards/ArtPieceCard";
import axios from "axios";

import { Box } from "@chakra-ui/core";

const Home = () => {
  const [artPieces, setArtPieces] = useState([]);

  const fetchArtPieceData = () => {
    let uri = "http://admin.insae.org/api/artworks/all";
    axios
      .get(uri)
      .then(data => {
        setArtPieces(data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchArtPieceData();
  }, []);

  return (
    <>
      <Box d='flex'>
      {artPieces.map((artpiece, id)=> {
        return (
        <ArtPieceCard key={artPieces[id].id} piece={artPieces[id]}/>
        ); 
      })}
      </Box>
    </>
  );
};

export default Home;
