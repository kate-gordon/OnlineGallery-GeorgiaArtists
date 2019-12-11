const express = require("express");
const router = express.Router();
const { allartworks, artworkid } = require("../models/artworks");

router.get("/all", async function(req, res, next) {
  const response = await allartworks();
  res.send(response);
});

router.get("/id/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await artworkid(id);
  res.send(response);
});

module.exports = router;
