const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw('ALTER SEQUENCE texts_id_seq RESTART WITH 1'),
    knex('texts')
      .del()
      .then(function () {
        return Promise.all([
          knex('texts').insert({
            user_id: 1,
            restaurant_id: 1,
            user_order : faker.lorem.lines(),
            restaurant_text : "" + Math.round(faker.random.number()/100),
            time_sent : faker.date.recent()
          }),

          knex('texts').insert({
            user_id: 2,
            restaurant_id: 1,
            user_order : faker.lorem.lines(),
            restaurant_text : "" + Math.round(faker.random.number()/100),
            time_sent : faker.date.recent()
          }),


        ]);
      })
  ])
};
