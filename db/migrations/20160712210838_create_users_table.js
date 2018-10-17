exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('restaurants', function (table) {
      table.increments();
      table.integer('phone_number');
      table.string('address');
    }),

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
    }),

    knex.schema.createTable('users', function (table) {
      table.increments();
      table.integer('phone_number');
      table.string('shortURL');
    }),

    knex.schema.createTable('order_details', function (table) {
      table.increments();
      table.integer('food_id');
      table.integer('user_id');
      table.integer('quantity');

      table
        .foreign("food_id")
        .references("id")
        .on("food_items")
        .onDelete("cascade");

      table
        .foreign("user_id")
        .references("id")
        .on("users")
        .onDelete("cascade");
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order_details'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('food_items'),
    knex.schema.dropTable('restaurants'),
  ])
};
