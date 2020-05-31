const db = require("../config/dbconfig.js");

const find = () => {
  return db("users");
};

const add = (user) => {
  return db("users").insert(user, "id", "username", "email", "password");
};

const findbyId = (id) => {
  // passing in the first value (id) in our object
  return db("users").where(id).first();
};

module.exports = {
  add,
  find,
  findbyId,
};
