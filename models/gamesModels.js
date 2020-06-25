const db = require("../config/dbconfig.js");

const find = () => {
  return db("games", "users_id");
};

const add = (game) => {
  return db("games").insert(game, "id");
};

// users_on_games_card

const findUsers = (id) => {
  return db("games").where({ users_id: id });
};

module.exports = {
  add,
  find,
  findUsers,
};
