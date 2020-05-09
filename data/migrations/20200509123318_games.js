exports.up = function (knex) {
  knex.schema.createTable("games", (tbl) => {
    tbl.increments("id");
    tbl.string("games");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
