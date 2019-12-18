const express = require("express");
const router = express.Router();
const {
  allartworks,
  artworkid,
  artistart,
  artwork_sold
} = require("../models/api-artworks");

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

router.post("/sold", async function(req, res, next) {
  const { ids } = req.body;
  artwork_sold(ids);
  res.send("success");
});

module.exports = router;
