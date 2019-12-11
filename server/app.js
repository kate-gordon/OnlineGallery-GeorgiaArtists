const express = require("express"),
  cookieParser = require("cookie-parser"),
  compression = require("compression"),
  helmet = require("helmet"),
  cors = require("cors"),
  logger = require("morgan");

require("dotenv").config();

const artistsRouter = require("./routes/artists");
const artworksRouter = require("./routes/artworks");
const eventsRouter = require("./routes/events");
const controlRouter = require("./routes/control");

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use("/images", express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/artists", artistsRouter);
app.use("/artworks", artworksRouter);
app.use("/events", eventsRouter);
app.use("/control", controlRouter);

module.exports = app;
