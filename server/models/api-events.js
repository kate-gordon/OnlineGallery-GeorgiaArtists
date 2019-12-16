const db = require("../utilities/conn");

//Grabs all events from database

const allevents = async () => {
  try {
    const response = await db.any(`SELECT * FROM events ORDER BY datewhen`);
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

//Grabs only today and future events from database

const futureevents = async () => {
  try {
    const response = await db.any(
      `SELECT * FROM events WHERE datewhen >= current_date ORDER BY datewhen`
    );
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

//Grabs only past events from database

const pastevents = async () => {
  try {
    const response = await db.any(
      `SELECT * FROM events WHERE datewhen < current_date ORDER BY datewhen`
    );
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

//Grabs a single event from database

const eventid = async id => {
  try {
    const response = await db.any(`SELECT * FROM events WHERE event_id=${id}`);
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

module.exports = {
  allevents,
  futureevents,
  pastevents,
  eventid
};
