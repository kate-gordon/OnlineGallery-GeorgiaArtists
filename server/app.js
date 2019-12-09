const express = require("express"),
  cookieParser = require("cookie-parser"),
  compression = require("compression"),
  helmet = require("helmet"),
  cors = require("cors"),
  logger = require("morgan");

require("dotenv").config();

const artistsRouter = require("./routes/artists");
const artworksRouter = require("./routes/artworks");

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

module.exports = app;
