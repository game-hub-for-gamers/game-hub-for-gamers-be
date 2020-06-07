const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authentication = require("./middleware/authentication.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

const userRoute = require("./Routes/user");
const gameRoute = require("./Routes/game");
// links of componenets here
server.use("/api/user", userRoute);
server.use("/api/game/", authentication, gameRoute);

server.get("/", (req, res) => {
  res.status(200).json({ response: "server is responding" });
});

module.exports = server;
