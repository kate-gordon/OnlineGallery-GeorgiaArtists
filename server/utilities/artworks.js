const db = require("./conn");

const allartworks = async () => {
  try {
    const response = await db.any(`SELECT * FROM artworks`);
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

const artworkid = async id => {
  try {
    const response = await db.any(`SELECT * FROM artworks WHERE id=${id}`);
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

module.exports = {
  allartworks,
  artworkid
};
