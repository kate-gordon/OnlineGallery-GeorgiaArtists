const express = require("express");
const router = express.Router();
const { login } = require("../models/admin");

//Router for post checking user login. Updates session if login success. Checks user login against .env

router.post("/login", function(req, res, next) {
  const { username, password } = req.body;
  if (login(username, password)) {
    req.session.is_logged_in = true;
    res.status(200).redirect("/admin");
  } else {
    res.sendStatus(401);
  }
});

//Shows login screen. Redirects to admin panel if logged in. All routes redirect here if user isn't logged in.

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

//Gives admin options to go to pages to edit artists, events, or artworks

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

module.exports = router;
