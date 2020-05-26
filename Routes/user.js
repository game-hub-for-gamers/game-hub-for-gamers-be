const router = require("express").Router();

const UserDB = require("../models/userModels");

router.get("/u", async (req, res) => {
  try {
    const users = await UserDB.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// register enddpoint
router.post("/register", async (req, res) => {
  // http://localhost:3333/api/user/register
  const newUser = req.body;
  console.log(newUser);
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

// login endpoint

router.post("/login", async (req, res) => {
  // async creates a promise (true/false)
  const user = req.body;
  const id = req.params;

  if (!user && !id) {
    res
      .status(404)
      .json({ errorMessage: "Please provide your correct credentials" });
  } else {
    try {
      res.status(200).json({ message: "You have successfully logged in" });
    } catch (erorr) {
      res.status(500).json({ errorMessage: "Something went wrong" }, error);
    }
  }
});

module.exports = router;
