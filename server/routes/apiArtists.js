const express = require("express");
const router = express.Router();
const { allartists, artistid } = require("../models/api-artists");

//Router get to retrieve all artwork
// api/artworks/all

router.get("/all", async function(req, res, next) {
  const response = await allartists();
  res.send(response);
});

//Router get to retrieve a single artwork by ID
// api/artworks/id/{id}

router.get("/id/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await artistid(id);
  res.send(response);
});

module.exports = router;
