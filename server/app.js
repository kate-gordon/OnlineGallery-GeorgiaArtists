const express = require("express"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan");

const artistsRouter = require("./routes/artists");
const artworksRouter = require("./routes/artworks");

const app = express();

app.use("/images", express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/artists", artistsRouter);
app.use("/artworks", artworksRouter);

module.exports = app;
