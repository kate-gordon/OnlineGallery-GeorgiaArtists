const db = require("../utilities/conn");

// Grabs all artworks from database

const allartworks = async () => {
  try {
    const response = await db.any(
      `SELECT * FROM artworks LEFT JOIN artists ON artworks.artist=artists.artist_id ORDER BY artworks.artist ASC`
    );
    return response;
  } catch (err) {
    console.log(err);
    return `Internal Database Error: ${err}`;
  }
};

//Grabs a single artwork by ID

const artworkid = async id => {
  try {
    const response = await db.any(
      `SELECT * FROM artworks LEFT JOIN artists ON artworks.artist=artists.artist_id WHERE artworks.artwork_id=${id} `
    );
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

//Grabs all artworks by a single artist

const artistart = async id => {
  try {
    const response = await db.any(`SELECT * FROM artworks WHERE artist=${id} `);
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

//Sets all artworks in artwork_id array to sold

const artwork_sold = async ids => {
  const response = await db.any(
    `UPDATE artworks SET sold='true' WHERE artwork_id IN (${ids.toString()})`
  );
};

module.exports = {
  allartworks,
  artworkid,
  artistart,
  artwork_sold
};
