
exports.up = function(knex, Promise) {
  return knex.schema.table('food_items', table => {
    table
      .integer('picked_up')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('food_items', table => {
    table.dropForeign('picked_up')
  })
};
