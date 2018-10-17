
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('food_items', function (table) {
      table.increments();
      table.integer('restaurant_id');
      table.string('item_name');
      table.integer('price');
      table.string('photo_URL');
      table.string('category');

      table
        .foreign("restaurant_id")
        .references("id")
        .on("restaurants")
        .onDelete("cascade");
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('food_items'),
  ])
};
