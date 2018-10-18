const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw('ALTER SEQUENCE food_items_id_seq RESTART WITH 1'),
    knex('food_items').del()
      .then(function () {
        return Promise.all([
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'pizza'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'pizza'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'pizza'
          }),

          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'sides'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'sides'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'sides'
          }),

          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'drinks'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'drinks'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: faker.random.number(),
            photo_URL: faker.random.image(),
            category: 'drinks'
          }),


        ]);
      })
  ]);
};
