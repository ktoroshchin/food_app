
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("order_details", function (table) {
      table.increments();
      table.integer("food_id");
      table.integer("user_id");
      table.integer("quantity");

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
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("order_details"),
  ]);
};
