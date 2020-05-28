const db = require("../config/dbconfig.js");

const find = () => {
  return db("users");
};

const add = (user) => {
  return db("users").insert(user, "id", "username", "email", "password");
};

const findbyId = (id) => {
  return db("users").where(id);
};

module.exports = {
  add,
  find,
  findbyId,
};
