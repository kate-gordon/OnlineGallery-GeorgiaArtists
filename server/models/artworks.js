const db = require("../utilities/conn");

const allartworks = async () => {
  try {
    const response = await db.any(
      `SELECT * FROM artworks FULL JOIN artists ON artworks.artist=artists.id`
    );
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

const artworkid = async id => {
  try {
    const response = await db.any(
      `SELECT * FROM artworks FULL JOIN artists ON artworks.artist=artists.id WHERE artworks.id=${id}`
    );
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

module.exports = {
  allartworks,
  artworkid
};
