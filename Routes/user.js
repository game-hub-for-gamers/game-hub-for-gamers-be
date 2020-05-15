const router = require("express").Router();

const UserDB = require("../models/userModels")

router.get("/u", async (req, res) => {
  try {
    const users = await UserDB.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

router.post("/u", async (req, res) => {
  const newUser = req.body;
  console.log(newUser)
  if (!newUser) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const user = await UserDB.add(newUser);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ err: "Error in adding user" });
    }
  }
});

module.exports = router