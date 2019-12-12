import React, { useState, useEffect } from "react";
import ArtPieceCard from "../../Cards/ArtPieceCard";
import axios from "axios";

import { Box } from "@chakra-ui/core";

const Home = props => {
  const { artPieces } = props; 

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
