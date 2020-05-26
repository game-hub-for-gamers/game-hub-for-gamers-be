exports.up = function (knex) {
  return knex.schema.createTable("games", (tbl) => {
    tbl.increments("id");
    tbl.string("game");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("games");
};
