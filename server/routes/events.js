const express = require("express");
const router = express.Router();
const { allevents, eventid } = require("../models/events");

router.get("/all", async function(req, res, next) {
  const response = await allevents();
  res.send(response);
});

router.get("/id/:id", async function(req, res, next) {
  const id = req.params.event_id;
  const response = await eventid(id);
  res.send(response);
});

module.exports = router;
