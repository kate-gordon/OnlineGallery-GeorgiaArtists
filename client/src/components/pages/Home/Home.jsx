import React from "react";
import ArtPieceCard from "../../Cards/ArtPieceCard";

import { Grid } from "@chakra-ui/core";

const Home = props => {
  const { artPieces } = props;

  return (
    <>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)"
        ]}
        mt={4}
        gap={6}
      >
        {artPieces.map((artpiece, id) => {
          return <ArtPieceCard key={artPieces[id].id} piece={artPieces[id]} />;
        })}
      </Grid>
    </>
  );
};

export default Home;
