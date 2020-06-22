const db = require("../config/dbconfig.js");

const find = () => {
  return db("games");
};

const add = (game) => {
  return db("games").insert(game, "id");
};

// adding game to user

const prfilegames = () => {
  return db ("many").insert(userid ,gameid, 'id')
}

module.exports = {
  add,
  find,
  // findbyID,
};
