const db = require("../utilities/conn");

const addArtist = (firstname, lastname, city, email, portrait, blurb) => {
  db.any(
    `INSERT INTO artists (firstname, lastname, city, email, portrait, blurb) VALUES ($1,$2,$3,$4,$5,$6);`,
    [firstname, lastname, city, email, portrait, blurb]
  );
};

const removeArtist = id => {
  db.any(`DELETE FROM artworks WHERE artist = ${id}`);
  db.any(`DELETE FROM artists WHERE artist_id=${id}`);
};

const editArtist = (artist_id, firstname, lastname, city, email, blurb) => {
  db.any(
    `UPDATE artists SET firstname = $1, lastname = $2, city = $3, email = $4, blurb = $5 WHERE artist_id=$6;`,
    [firstname, lastname, city, email, blurb, artist_id]
  );
};

module.exports = {
  addArtist,
  removeArtist,
  editArtist
};
