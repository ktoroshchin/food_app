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
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'pizza'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'pizza'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'pizza'
          }),

          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'sides'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'sides'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'sides'
          }),

          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'drinks'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'drinks'
          }),
          knex('food_items').insert({
            restaurant_id: 1,
            item_name: faker.random.word(),
            price: Math.round(faker.random.number()/1000),
            photo_URL: faker.image.food(),
            category: 'drinks'
          }),


        ]);
      })
  ]);
};
