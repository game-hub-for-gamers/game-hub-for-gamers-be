exports.up = function (knex) {
  return knex.schema.createTable("games", (tbl) => {
    tbl.increments("id");
    tbl.string("game");
    tbl.integer("users_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
