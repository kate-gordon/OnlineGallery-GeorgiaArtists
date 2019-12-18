const express = require("express");
const router = express.Router();
const { allartworks, artworkid, artistart } = require("../models/api-artworks");

router.get("/all", async function(req, res, next) {
  const response = await allartworks();
  res.send(response);
});

router.get("/id/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await artworkid(id);
  res.send(response);
});

router.get("/artist/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await artistart(id);
  res.send(response);
});

module.exports = router;
