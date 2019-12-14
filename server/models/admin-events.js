const db = require("../utilities/conn");

const addEvent = (title, datewhen, location, picture, blurb) => {
  db.any(
    `INSERT INTO events (title, datewhen, location, picture, blurb) VALUES ($1,$2,$3,$4,$5);`,
    [title, datewhen, location, picture, blurb]
  );
};

const removeEvent = id => {
  db.any(`DELETE FROM events WHERE event_id = ${id}`);
};

module.exports = {
  addEvent,
  removeEvent
};
