const db = require("../config/dbconfig.js");

const find = () => {
  return db("users");
};

const add = (user) => {
  return db("users").insert(user, "id", "username", "email", "password");
};

// use for users on games card

const findbyId = (id) => {
  // passing in the first value (id) in our object
  return db("users").where(id).first();
};

// user on games card below

const findGames = (id) => {
  return db("users").where({ id });
};

module.exports = {
  add,
  find,
  findbyId,
  findGames,
};
