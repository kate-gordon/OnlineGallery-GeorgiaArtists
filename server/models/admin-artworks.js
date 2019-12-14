const db = require("../utilities/conn");

const addArtwork = (title, medium, price, award, picture, artist) => {
  db.any(
    `INSERT INTO artworks (title, medium, price, award, picture, artist) VALUES ($1,$2,$3,$4,$5,$6);`,
    [title, medium, price, award, picture, artist]
  );
};

const removeArtwork = id => {
  db.any(`DELETE FROM artworks WHERE artwork_id=${id}`);
};

const editArtwork = (artwork_id, title, medium, price, award, artist) => {
  db.any(
    `UPDATE artworks SET title = $1, medium = $2, price = $3, award = $4, artist = $5 WHERE artwork_id=$6;`,
    [title, medium, price, award, artist, artwork_id]
  );
};

module.exports = {
  addArtwork,
  removeArtwork,
  editArtwork
};
