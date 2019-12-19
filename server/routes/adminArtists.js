const express = require("express");
const router = express.Router();
const {
  addArtist,
  removeArtist,
  editArtist
} = require("../models/admin-artists");
const { allartists } = require("../models/api-artists");
const multer = require("multer");

//Artist image storage using Multer.
//Images will go to URL/images/artists/

const artistStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/images/artists/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  }
});
const artistUpload = multer({ storage: artistStorage });

//Router get for artists admin page
// admin/artists/

router.get("/", async function(req, res, next) {
  if (req.session.is_logged_in) {
    const artists = await allartists();
    res.render("template", {
      locals: {
        artists
      },
      partials: {
        partial: "partial-artists"
      }
    });
  } else {
    res.status(401).redirect("/");
  }
});

//Router post for adding new artist
// admin/artists/add

router.post("/add", artistUpload.single("portrait"), async function(
  req,
  res,
  next
) {
  if (req.session.is_logged_in) {
    const { firstname, lastname, email, city, blurb } = req.body;
    addArtist(
      firstname,
      lastname,
      city,
      email,
      process.env.URL + "/images/artists/portrait-" + req.file.originalname,
      blurb
    );
    res.status(200).redirect("/admin/artists");
  } else {
    res.status(401).redirect("/");
  }
});

//Router post for removing an artist
// admin/artist/remove

router.post("/remove", function(req, res, next) {
  if (req.session.is_logged_in) {
    const { artist_id } = req.body;
    removeArtist(artist_id);
    res.status(200).redirect("/admin/artists");
  } else {
    res.status(401).redirect("/");
  }
});

//Router post for editing an artist
// admin/artist/edit

router.post("/edit", async function(req, res, next) {
  if (req.session.is_logged_in) {
    const { artist_id, firstname, lastname, email, city, blurb } = req.body;
    editArtist(artist_id, firstname, lastname, city, email, blurb);
    res.status(200).redirect("/admin/artists");
  } else {
    res.status(401).redirect("/");
  }
});

module.exports = router;
