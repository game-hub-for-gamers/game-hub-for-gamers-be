const express = require("express");

const Users = require("../models/userModels.js");

const router = express.Router();

router.post("/register", (req, res) => {
  let user = req.body;

  Users.add(user)
    .then((res) => {
      res.status(200).json({ message: "You have created an account", res });
    })
    .catch((error) => {
      res.status(500).json({ errorMessge: "Internal Server Error" + error });
    });
});

module.exports = router;
