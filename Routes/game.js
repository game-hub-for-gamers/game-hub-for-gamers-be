const router = require("express").Router();
const jwt = require("jsonwebtoken");

const gameDB = require("../models/gamesModels");
// const authentication = require("../middleware/authentication.js");

router.get("/get", async (req, res) => {
  try {
    const game = await gameDB.find();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

router.post("/post", async (req, res) => {
  const newGame = req.body;
  console.log(newGame);
  if (!newGame) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const game = await gameDB.add(newGame);
      res.status(201).json(game);
    } catch (err) {
      res.status(500).json({ err: "Error in adding user" });
    }
  }
});

module.exports = router;
