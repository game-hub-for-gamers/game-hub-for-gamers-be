const router = require("express").Router();

const gameDB = require("../models/gamesModels");

router.get("/g", async (req, res) => {
  try {
    const game = await gameDB.find();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

router.post("/g", async (req, res) => {
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
