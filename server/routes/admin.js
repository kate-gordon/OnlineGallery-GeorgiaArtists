const express = require("express");
const router = express.Router();
const { login } = require("../models/control");

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

router.get("/admin/:artists", function(req, res, next) {
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
module.exports = router;
