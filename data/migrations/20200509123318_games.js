exports.up = function (knex,Promise) {
  return (knex.schema.createTable("games", (tbl) => {
    tbl.increments("id");
    tbl.string("games");
  }));
};

exports.down = function (knex,Promise) {
  return knex.dropTableIfExists("games");
};
