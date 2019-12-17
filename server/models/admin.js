const db = require("../utilities/conn");

const login = (username, password) => {
  if (username !== process.env.CTRLUSER || password !== process.env.CTRLPASS) {
    return false;
  }
  return true;
};

module.exports = {
  login
};
