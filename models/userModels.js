const db = require("../config/dbconfig.js");

const find = () => {
  return db("users");
};

const add = (user) => {
  return db("users").insert(user, "id");
};
module.exports = {
  add,
  find,
  // findbyID,
};
