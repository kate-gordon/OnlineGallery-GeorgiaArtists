const express = require("express");
const router = express.Router();
const {
  addArtwork,
  removeArtwork,
  editArtwork
} = require("../models/admin-artworks");
const { allartists } = require("../models/api-artists");
const { allartworks } = require("../models/api-artworks");
const multer = require("multer");

//Artwork image storage using Multer.
//Images will go to URL/images/artworks/

const artworkStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/images/artworks/");
  },
  filename: function(req, file, cb) {
    cb(null, "picture-" + file.originalname);
  }
});
const artworkUpload = multer({ storage: artworkStorage });

// Router get for the artwork management page
// admin/artworks

router.get("/", async function(req, res, next) {
  if (req.session.is_logged_in) {
    const artists = await allartists();
    const artworks = await allartworks();
    res.render("template", {
      locals: {
        artists,
        artworks
      },
      partials: {
        partial: "partial-artworks"
      }
    });
  } else {
    res.status(401).redirect("/");
  }
});

//Router post for adding artwork.
// admin/artworks/add

router.post("/add", artworkUpload.single("picture"), async function(
  req,
  res,
  next
) {
  if (req.session.is_logged_in) {
    console.log(req.body);
    const { title, medium, price, award, artist } = req.body;
    addArtwork(
      title,
      medium,
      price,
      award,
      process.env.URL + "/images/artworks/picture-" + req.file.originalname,
      artist
    );
    res.status(200).redirect("/admin/artworks");
  } else {
    res.status(401).redirect("/");
  }
});

// Router post for deleting single artwork
// admin/artworks/remove

router.post("/remove", function(req, res, next) {
  if (req.session.is_logged_in) {
    const { artwork_id } = req.body;
    removeArtwork(artwork_id);
    res.status(200).redirect("/admin/artworks");
  } else {
    res.status(401).redirect("/");
  }
});

//Router post for editing an artwork
// admin/artworks/edit

router.post("/edit", async function(req, res, next) {
  if (req.session.is_logged_in) {
    const { artwork_id, title, medium, price, award, artist } = req.body;
    let sold = false;
    if (req.body.sold) {
      sold = true;
    }
    editArtwork(artwork_id, title, medium, price, award, artist, sold);
    res.status(200).redirect("/admin/artworks");
  } else {
    res.status(401).redirect("/");
  }
});

module.exports = router;
