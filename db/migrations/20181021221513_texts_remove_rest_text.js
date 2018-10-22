
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('texts', function (table) {
      table.dropColumn('restaurant_text');
      table.dropColumn('time_sent');

    })
  ]);
};




exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('texts', function(table) {
      table.string('restaurant_text');
      table.string('time_sent');
    }),
  ]);
};




