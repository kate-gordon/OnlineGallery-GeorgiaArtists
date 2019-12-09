var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/all", function(req, res, next) {
  res.send([
    {
      id: 1,
      title: "Hilary Stole My Apple Pie",
      medium: "Painting",
      artist: 1,
      picture: "localhost:5252/images/artworks/applepie.jpg",
      price: 175,
      sold: false,
      award: "Best Apple Pie Related"
    },
    {
      id: 2,
      title: "Sea Man",
      medium: "Marble",
      artist: 2,
      picture: "localhost:5252/images/artworks/spongeart.png",
      price: 2225,
      sold: true,
      award: "Most Beautiful Statue"
    }
  ]);
});

router.get("/id/1", function(req, res, next) {
  res.send({
    id: 1,
    title: "Hilary Stole My Apple Pie",
    medium: "Painting",
    artist: 1,
    picture: "localhost:5252/images/artworks/applepie.jpg",
    price: 175,
    sold: false,
    award: "Best Apple Pie Related"
  });
});

router.get("/id/2", function(req, res, next) {
  res.send({
    id: 2,
    title: "Sea Man",
    medium: "Marble",
    artist: 2,
    picture: "localhost:5252/images/artworks/spongeart.jpg",
    price: 2225,
    sold: true,
    award: "Most Beautiful Statue"
  });
});

module.exports = router;
