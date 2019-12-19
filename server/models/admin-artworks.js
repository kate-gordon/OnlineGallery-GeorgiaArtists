const db = require("../utilities/conn");

//Adds artwork to database

const addArtwork = (title, medium, price, award, picture, artist) => {
  db.any(
    `INSERT INTO artworks (title, medium, price, award, picture, artist) VALUES ($1,$2,$3,$4,$5,$6);`,
    [title, medium, price, award, picture, artist]
  );
};

//Removes artwork from database

const removeArtwork = id => {
  db.any(`DELETE FROM artworks WHERE artwork_id=${id}`);
};

//Edits artwork in database

const editArtwork = (artwork_id, title, medium, price, award, artist, sold) => {
  console.log(artwork_id, title, medium, price, award, artist, sold);
  db.any(
    `UPDATE artworks SET title = $1, medium = $2, price = $3, award = $4, artist = $5, sold = $6 WHERE artwork_id=$7;`,
    [title, medium, price, award, artist, sold, artwork_id]
  );
};

module.exports = {
  addArtwork,
  removeArtwork,
  editArtwork
};
