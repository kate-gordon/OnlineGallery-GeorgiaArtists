const db = require("../utilities/conn");

//Adds event to database

const addEvent = (title, datewhen, location, picture, blurb) => {
  db.any(
    `INSERT INTO events (title, datewhen, location, picture, blurb) VALUES ($1,$2,$3,$4,$5);`,
    [title, datewhen, location, picture, blurb]
  );
};

//Removes event from database

const removeEvent = id => {
  db.any(`DELETE FROM events WHERE event_id = ${id}`);
};

//Edits event in database

const editEvent = (title, datewhen, location, blurb, cancelled, event_id) => {
  db.any(
    `UPDATE events SET title = $1, datewhen = $2, location = $3, blurb =$4, cancelled =$5 WHERE event_id=$6;`,
    [title, datewhen, location, blurb, cancelled, event_id]
  );
};

module.exports = {
  addEvent,
  removeEvent,
  editEvent
};
