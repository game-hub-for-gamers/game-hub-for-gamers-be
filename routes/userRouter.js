const router = require("express").Router();

const usersDB = require("../models/userModels.js");

// GET ALL USERS
router.get("/u", async (req, res) => {
  try {
    const users = await usersDB.find();
    console.log(users)
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// GET USER BY ID
// router.get("/:id", async (req, res) => {
//   const userId = req.params.id;
//   try {
    
//     const user = await usersDB.findById(userId);
//     if (!user) {
//       res
//         .status(404)
//         .json({ err: "The user with the specified id does not exist" });
//     } else {
//       res.status(200).json(user);
//     }
//   } catch (err) {
//     res.status({ err: "The user information could not be retrieved" });
//   }
// });

router.post("/u", async (req, res) => {
  const newUser = req.body;
  console.log(newUser)
  if (!newUser) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const user = await usersDB.add(newUser);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ err: "Error in adding user" });
    }
  }
});

module.exports = router;
