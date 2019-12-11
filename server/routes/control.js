const express = require("express");
const router = express.Router();
const { login } = require("../models/control");

router.post("/login", function(req, res, next) {
  const { username, password } = req.body;
  const response = login(username, password);
});

module.exports = router;
