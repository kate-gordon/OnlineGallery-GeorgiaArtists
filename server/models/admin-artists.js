const addArtist = async (firstname, lastname, city, email, portrait, blurb) => {
  return new Promise(async (resolve, reject) => {
    response = await db.any(
      `INSERT INTO artists (firstname, lastname, city, email, portrait, blurb) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id;`,
      [firstname, lastname, city, email, picture, blurb]
    );
    if (response.id) {
      resolve(response.id);
    }
    reject("Failed to add artist");
  });
};
