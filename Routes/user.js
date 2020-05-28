const router = require("express").Router();
const bcrypt = require("bcrypt");
const getToken = require("../middleware/token");

const UserDB = require("../models/userModels");

// get users endpoint
router.get("/get", async (req, res) => {
  // http://localhost:3333/api/user/get
  try {
    const users = await UserDB.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// register endpoint
router.post("/register", async (req, res) => {
  // http://localhost:3333/api/user/register
  let newUser = req.body;

  if (!newUser) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const hash = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hash; // setting the users password to a hash

      const user = await UserDB.add(newUser); // await for the promise
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error in adding new user" + error });
    }
  }
});

// login endpoint
router.post("/login", (req, res) => {
  // http://localhost:3333/api/user/login

  let { username, password } = req.body;

  if (!username && !password) {
    res.status(401).json({ error: "Wrong password or username" });
  } else {
    UserDB.findbyId({ username })
      .first() // passing in the first value in our object
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = getToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!!`,
            token,
            id: user.id,
          });
        } else {
          res.status(400).json({ error: "please provide credentials" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
});

module.exports = router;
