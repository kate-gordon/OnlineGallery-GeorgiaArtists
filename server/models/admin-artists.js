const db = require("../utilities/conn");

const addArtist = async (firstname, lastname, city, email, portrait, blurb) => {
  return new Promise(async (resolve, reject) => {
    response = await db.any(
      `INSERT INTO artists (firstname, lastname, city, email, portrait, blurb) VALUES ($1,$2,$3,$4,$5,$6) RETURNING artist_id;`,
      [firstname, lastname, city, email, portrait, blurb]
    );
    console.log(response);
    if (response[0].artist_id) {
      resolve(response.artist_id);
    }
    reject("Failed to add artist");
  });
};

module.exports = {
  addArtist
};
