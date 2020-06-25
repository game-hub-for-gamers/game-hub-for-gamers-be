const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

const userRoute = require("./Routes/user");
const gameRoute = require("./Routes/game");
// links of componenets here
server.use("/api/user", userRoute);
server.use("/api/game", gameRoute);

server.get("/", (req, res) => {
  res.status(200).json({ response: "server is responding :)" });
});

module.exports = server;
