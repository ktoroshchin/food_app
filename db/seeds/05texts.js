const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE texts_id_seq RESTART WITH 1"),
    knex("texts")
      .del()
      .then(function () {
        return Promise.all([
          knex("texts").insert({
            user_id: 1,
            restaurant_id: 1,
            user_order : faker.lorem.lines(),
          }),

          knex("texts").insert({
            user_id: 2,
            restaurant_id: 1,
            user_order : faker.lorem.lines(),

          }),

        ]);
      })
  ]);
};
