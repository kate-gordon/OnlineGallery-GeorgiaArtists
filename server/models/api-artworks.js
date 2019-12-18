const db = require("../utilities/conn");

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

const artistart = async id => {
  try {
    const response = await db.any(
      `SELECT * FROM artworks LEFT JOIN artists ON artworks.artist=artists.artist_id WHERE artworks.artist=${id} `
    );
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

module.exports = {
  allartworks,
  artworkid,
  artistart
};
