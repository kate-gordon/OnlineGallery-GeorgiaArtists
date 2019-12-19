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

//HTML Renderer

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

//Utilities

app.use(compression());
app.use(helmet());
app.use(cors());
app.use("/", express.static("public"));
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

//Routers

const artistsAPIRouter = require("./routes/apiArtists");
const artworksAPIRouter = require("./routes/apiArtworks");
const eventsAPIRouter = require("./routes/apiEvents");
const adminRouter = require("./routes/admin");
const artistsAdminRouter = require("./routes/adminArtists");
const artworksAdminRouter = require("./routes/adminArtworks");
const eventsAdminRouter = require("./routes/adminEvents");

//Routes

app.use("/api/artists", artistsAPIRouter);
app.use("/api/artworks", artworksAPIRouter);
app.use("/api/events", eventsAPIRouter);
app.use("/", adminRouter);
app.use("/admin/artists", artistsAdminRouter);
app.use("/admin/artworks", artworksAdminRouter);
app.use("/admin/events", eventsAdminRouter);

module.exports = app;
