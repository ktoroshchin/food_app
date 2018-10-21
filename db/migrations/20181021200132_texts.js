
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('texts', function (table) {
      table.increments();
      table.integer('user_id');
      table.integer('restaurant_id');
      table.string('user_order', 1000);
      table.string('restaurant_text');
      table.string('time_sent');


      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');

      table
        .foreign('restaurant_id')
        .references('id')
        .on('restaurants')
        .onDelete('cascade');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('texts'),
  ]);
};
