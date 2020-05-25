const db = require("../config/dbconfig.js");

const find = () => {
  return db("games");
};

const add = game => {
  return db("games").insert(game, "id");
};
module.exports = {
  add,
  find,
  // findbyID,
};
