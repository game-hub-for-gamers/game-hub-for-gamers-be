const db = require("../config/dbconfig.js");

module.exports = {
  add,
  find,
  findbyID,
};

function find() {
  return db("users").select(
    // "id",
    "username",
    "email",
    "password",
    "image",
    "name",
    "phone",
    "xbox",
    "ps4",
    "steam",
    "xboxgamertag",
    "ps4gamertag",
    "steamgamertag"
  );
}

function findbyID(id) {
  return db("users").where({ id }).first();
}

function add(user) {
  return db("users")
    .insert(user, "id", "username", "email", "password")
    .then((ids) => {
      return findbyID([ids]);
    });
}
