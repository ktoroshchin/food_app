'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  const menu = {
    pizza: [],
    sides: [],
    drinks: []
  };

  router.get('/', (req, res) => {
    knex
      .select('*')
      .from('food_items')
      .where({
        category: 'pizza'
      })
      .then((rows) => {
        rows.forEach(item => {
          menu.pizza.push(item);
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();
      });

    knex
      .select('*')
      .from('food_items')
      .where({
        category: 'sides'
      })
      .then((rows) => {
        rows.forEach(item => {
          menu.sides.push(item);
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();
      });

    knex
      .select('*')
      .from('food_items')
      .where({
        category: 'drinks'
      })
      .then((rows) => {
        rows.forEach(item => {
          menu.drinks.push(item);
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();
      });
    res.render('index', {menu: menu});
  //  res.json(menu);
  });
  return router;
};
