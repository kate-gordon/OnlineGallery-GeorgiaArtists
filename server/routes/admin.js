const express = require("express");
const router = express.Router();
const { login } = require("../models/admin");

//Router get for login screen
//Shows login screen. Redirects to admin panel if logged in. All routes redirect here if user isn't logged in.
// root

router.get("/", function(req, res, next) {
  if (!req.session.is_logged_in) {
    res.render("no-template", {
      partials: {
        partial: "partial-login"
      }
    });
  } else {
    res.status(200).redirect("/admin");
  }
});

//Router get - Landing page for admin
// /admin

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

//Router post for checking user login. Updates session if login success. Checks user login against .env
// /login

router.post("/login", function(req, res, next) {
  const { username, password } = req.body;
  if (login(username, password)) {
    req.session.is_logged_in = true;
    res.status(200).redirect("/admin");
  } else {
    res.sendStatus(401);
  }
});

//Router get for user logout.
// /logout

router.get("/logout", function(req, res, next) {
  req.session.destroy();
  res.status(200).redirect("/");
});

module.exports = router;
