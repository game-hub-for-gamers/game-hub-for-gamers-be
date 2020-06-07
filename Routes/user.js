const router = require("express").Router();
const bcrypt = require("bcrypt");
const getToken = require("../middleware/token");

const UserDB = require("../models/userModels");

// get users endpoint
router.get("/get", async (req, res) => {
  // http://localhost:3333/api/user/get
  try {
    const users = await UserDB.find(); // telling the async to countuine even if user assingment is not done then when UserDD.add is done it will execute
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// register endpoint
// This funtion allows the user to resgister information for their account and send the find and their hashed password to the database
router.post("/register", async (req, res) => {
  // http://localhost:3333/api/user/register
  let newUser = req.body;

  if (!newUser) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const hash = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hash; // setting the users password to a hash

      const user = await UserDB.add(newUser); // telling the async to countuine even if user assingment is not done then when UserDD.add is done it will execute
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error in adding new user" + error });
    }
  }
});

// login endpoint
// This funciotn will return the users token when logining into their account
router.post("/login", (req, res) => {
  // http://localhost:3333/api/user/login

  let { username, password } = req.body;

  if (!username && !password) {
    res.status(401).json({ error: "Wrong password or username" });
  } else {
    UserDB.findbyId({ username })
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
