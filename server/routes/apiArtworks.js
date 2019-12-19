const express = require("express");
const router = express.Router();
const {
  allartworks,
  artworkid,
  artistart,
  artwork_sold
} = require("../models/api-artworks");

//Router get request returns all art found
// api/artworks/all

router.get("/all", async function(req, res, next) {
  const response = await allartworks();
  res.send(response);
});

//Router returns a specified artwork based on ID
// api/artworks/id/{id}

router.get("/id/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await artworkid(id);
  res.send(response);
});

//Router get request returns all artwork by a particular artist
// api/artworks/artist/{id}

router.get("/artist/:id", async function(req, res, next) {
  const { id } = req.params;
  const response = await artistart(id);
  res.send(response);
});

//Router post request sets all artworks to sold
// api/artworks/sold

router.post("/sold", async function(req, res, next) {
  const { ids } = req.body;
  artwork_sold(ids);
  res.send("success");
});

module.exports = router;
