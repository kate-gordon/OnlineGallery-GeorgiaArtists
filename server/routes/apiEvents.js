const express = require("express");
const router = express.Router();
const {
  allevents,
  futureevents,
  pastevents,
  eventid
} = require("../models/api-events");

//Router to grab all events
// api/events/all

router.get("/all", async function(req, res, next) {
  const response = await allevents();
  res.send(response);
});

//Router to grab future events - including today's events
// api/events/future

router.get("/future", async function(req, res, next) {
  const response = await futureevents();
  res.send(response);
});

//Router to grab past events
// api/events/past

router.get("/past", async function(req, res, next) {
  const response = await pastevents();
  res.send(response);
});

//Router for individual events
// api/events/id/{id}

router.get("/id/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await eventid(id);
  res.send(response);
});

module.exports = router;
