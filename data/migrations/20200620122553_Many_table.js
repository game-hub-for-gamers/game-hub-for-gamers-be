
exports.up = function(knex) {
  return knex.createTable('Many',tbl => {

    tbl.increments("id");
    tbl.increments("gameid");
    tbl.increments("userid");
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('Many')
};
