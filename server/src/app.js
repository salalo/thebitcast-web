import express from "express";
import morgan from "morgan";
import passport from "passport";
import bodyParser from "body-parser";
import session from "express-session";
import { join } from "path";
import cors from "cors";

import auth from "./routes/auth.js";
import settings from "./routes/settings.js";
import keys from "./config/keys.js";
import { notFound, catchErrors } from "./middlewares/errors.js";
import podcasts from "./routes/podcasts"
import categories from "./routes/categories"

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080"
  })
);

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
  extended: true,
  limit: '510MB'
}));
app.use(morgan("dev"));
app.set("trust proxy", 1); // trust first proxy

app.use(
  session({
    name: "SESS",
    secret: keys.cookie.secret,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: false,
      expires: new Date(253402300000000)
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/auth", auth());
app.use("/podcasts", podcasts());
app.use("/categories", categories());
app.use("/userOptions", settings());

// err handling
app.use(notFound);
app.use(catchErrors);

app.listen(process.env.PORT || 8081);
