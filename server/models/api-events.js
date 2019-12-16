const db = require("../utilities/conn");

const allevents = async () => {
  try {
    const response = await db.any(`SELECT * FROM events ORDER BY datewhen`);
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

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
