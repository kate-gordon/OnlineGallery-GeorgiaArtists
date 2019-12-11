const express = require("express");
const router = express.Router();
const { allartists, artistid } = require("../models/artists");

router.get("/all", async function(req, res, next) {
  const response = await allartists();
  res.send(response);
});

router.get("/id/:id", async function(req, res, next) {
  const id = req.params.artist_id;
  const response = await artistid(id);
  res.send(response);
});

module.exports = router;
