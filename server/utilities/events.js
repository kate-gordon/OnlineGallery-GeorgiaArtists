const db = require("./conn");

const allevents = async () => {
  try {
    const response = await db.any(`SELECT * FROM events`);
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

const eventid = async id => {
  try {
    const response = await db.any(`SELECT * FROM events WHERE id=${id}`);
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

module.exports = {
  allevents,
  eventid
};
