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

const artwork_sold = async ids => {
  const response = await db.any(
    `UPDATE artworks SET sold='true' WHERE artwork_id IN (${ids.substring(
      1,
      ids.length - 1
    )})`
  );
  console.log(response);
};

module.exports = {
  allartworks,
  artworkid,
  artistart,
  artwork_sold
};
