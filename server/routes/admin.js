const express = require("express");
const path = require("path");
const router = express.Router();
const { login } = require("../models/admin");
const { addArtist } = require("../models/admin-artists");
const multer = require("multer");

const artistStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/artists/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  }
});
const artistUpload = multer({ storage: artistStorage });

router.post("/login", function(req, res, next) {
  const { username, password } = req.body;
  if (login(username, password)) {
    req.session.is_logged_in = true;
    res.status(200).redirect("/admin");
  } else {
    res.sendStatus(401);
  }
});

router.get("/", function(req, res, next) {
  if (!req.session.is_logged_in) {
    res.render("template", {
      partials: {
        partial: "partial-login"
      }
    });
  } else {
    res.status(200).redirect("/admin");
  }
});

router.get("/admin", function(req, res, next) {
  if (req.session.is_logged_in) {
    res.render("template", {
      partials: {
        partial: "partial-admin"
      }
    });
  } else {
    res.status(401).redirect("/");
  }
});

router.get("/admin/artists", function(req, res, next) {
  if (req.session.is_logged_in) {
    res.render("template", {
      partials: {
        partial: "partial-artists"
      }
    });
  } else {
    res.status(401).redirect("/");
  }
});

router.post(
  "/admin/artists/add",
  artistUpload.single("portrait"),
  async function(req, res, next) {
    if (req.session.is_logged_in) {
      const { firstname, lastname, email, city, blurb } = req.body;
      const response = await addArtist(
        firstname,
        lastname,
        city,
        email,
        "http://admin.insae.org/images/artists/portrait-" +
          req.file.originalname,
        blurb
      );
      console.log(response);
      res.status(200).redirect("/admin");
    } else {
      res.status(401).redirect("/");
    }
  }
);

module.exports = router;
