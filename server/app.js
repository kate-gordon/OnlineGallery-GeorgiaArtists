const express = require("express"),
  cookieParser = require("cookie-parser"),
  compression = require("compression"),
  helmet = require("helmet"),
  cors = require("cors"),
  es6Renderer = require("express-es6-template-engine"),
  session = require("express-session"),
  FileStore = require("session-file-store")(session),
  logger = require("morgan");

require("dotenv").config();
const app = express();

const artistsRouter = require("./routes/artists");
const artworksRouter = require("./routes/artworks");
const eventsRouter = require("./routes/events");
const adminRouter = require("./routes/admin");

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

app.use(compression());
app.use(helmet());
app.use(cors());
app.use("/images", express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    is_logged_in: false
  })
);

app.use("/api/artists", artistsRouter);
app.use("/api/artworks", artworksRouter);
app.use("/api/events", eventsRouter);
app.use("/", adminRouter);

module.exports = app;
