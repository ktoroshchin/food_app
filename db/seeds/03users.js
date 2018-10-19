const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users')
      .del()
      .then(function () {
        return Promise.all([
          knex('users').insert({
            phone_number: faker.phone.phoneNumber(),
            shortURL: faker.random.number()
          }),

          knex('users').insert({
            phone_number: faker.phone.phoneNumber(),
            shortURL: faker.random.number()
          })


        ]);
      })
  ]);
};
