exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.string("username").unique().notNullable();
    tbl.string("email").unique().notNullable();
    tbl.string("password").notNullable();
    // optional
    // tbl.string("image", 255);
    // tbl.string("name", 25);
    // tbl.integer("phone", 10);
    // tbl.increments("id");
    // tbl.boolen("xbox");
    // tbl.boolen("ps4");
    // tbl.boolen("steam");
    // tbl.string("xboxgamertag", 25).unique();
    // tbl.string("ps4gamertag", 25).unique();
    // tbl.string("steamgamertag", 25).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
