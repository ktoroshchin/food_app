const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw('ALTER SEQUENCE restaurants_id_seq RESTART WITH 1'),
    knex('restaurants')
      .del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
            knex('restaurants').insert({
              phone_number: faker.phone.phoneNumber(),
              address: faker.address.streetAddress()
            }),
        ]);
      })
    ])
};
