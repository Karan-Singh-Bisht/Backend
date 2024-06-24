const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Cookie Parser
app.use(cookieParser());

//CORS
app.use(cors()); //Applies cors to all requests

//Express Session
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.get("/create", (req, res) => {
  req.session.polo = true;
  res.send("session created");
});

app.get("/check", (req, res) => {
  console.log(req.session.polo);
});

//Connect Flash
app.use(flash());

app.get("/", (req, res) => {
  req.flash("success", "Welcome to home");
  res.redirect("/success");
});

//Applies cors to particular request
app.get("/success", cors(), (req, res) => {
  let msg = req.flash("success");
  res.send(msg);
});

//cookies

app.get("/checking", (req, res) => {
  console.log(req.cookies.banned);
  res.send("Checking...");
});

app.get("/banned", (req, res) => {
  res.cookie("banned", true);
  res.send("banned");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
