const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

// const authentication = require("./middleware/authentication.js");

const server = express();

// configuring cookie globally
const sessionConfig = {
  name: "sessionCookie",
  secret: "secrets",
  cookie: {
    maxAge: 1000 * 30, // cookie will be valide for 30 seconds
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false, // make sure not to set cookie automatically
};

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

const userRoute = require("./Routes/user");
const gameRoute = require("./Routes/game");
// links of componenets here
server.use("/api/user", userRoute);
server.use("/api/game/", gameRoute);

server.get("/", (req, res) => {
  res.status(200).json({ response: "server is responding" });
});

module.exports = server;
