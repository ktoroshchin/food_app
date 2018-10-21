
exports.up = function(knex, Promise) {
  return knex.schema.table('order_details', table => {
    table
      .integer('picked_up')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('order_details', table => {
    table.dropColumn('picked_up')
  })
};
