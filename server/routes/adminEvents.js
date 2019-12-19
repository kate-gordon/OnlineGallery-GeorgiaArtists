const express = require("express");
const router = express.Router();
const { addEvent, removeEvent, editEvent } = require("../models/admin-events");
const { allevents } = require("../models/api-events");
const multer = require("multer");

//Event image storage using Multer.
//Images will go to URL/images/events/

const eventStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/images/events/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  }
});
const eventUpload = multer({ storage: eventStorage });

//Router get for the event management page
// admin/events

router.get("/", async function(req, res, next) {
  const events = await allevents();
  if (req.session.is_logged_in) {
    res.render("template", {
      locals: {
        events
      },
      partials: {
        partial: "partial-events"
      }
    });
  } else {
    res.status(401).redirect("/");
  }
});

//Router post to add an event
// admin/events/add

router.post("/add", eventUpload.single("picture"), async function(
  req,
  res,
  next
) {
  if (req.session.is_logged_in) {
    const { title, date, time, location, blurb } = req.body;
    addEvent(
      title,
      `${date} ${time}`,
      location,
      process.env.URL + "/images/events/picture-" + req.file.originalname,
      blurb
    );
    res.status(200).redirect("/admin/events");
  } else {
    res.status(401).redirect("/");
  }
});

//Router post to remove an event
// admin/events/add

router.post("/remove", function(req, res, next) {
  if (req.session.is_logged_in) {
    const { event_id } = req.body;
    removeEvent(event_id);
    res.status(200).redirect("/admin/events");
  } else {
    res.status(401).redirect("/");
  }
});

// Router post to update an event
// admin/events/edit

router.post("/edit", async function(req, res, next) {
  if (req.session.is_logged_in) {
    const { title, date, time, location, blurb, event_id } = req.body;
    let cancelled = false;
    if (req.body.cancelled) {
      cancelled = true;
    }
    editEvent(title, `${date} ${time}`, location, blurb, cancelled, event_id);
    res.status(200).redirect("/admin/events");
  } else {
    res.status(401).redirect("/");
  }
});

module.exports = router;
