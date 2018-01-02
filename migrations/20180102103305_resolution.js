exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("resolution", table => {
      table.increments().primary;
      table.string("name");
      table.text("content");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("resolution")]);
};
