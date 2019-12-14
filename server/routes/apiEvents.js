const express = require("express");
const router = express.Router();
const { allevents, eventid } = require("../models/api-events");

router.get("/all", async function(req, res, next) {
  const response = await allevents();
  res.send(response);
});

router.get("/id/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await eventid(id);
  res.send(response);
});

module.exports = router;
