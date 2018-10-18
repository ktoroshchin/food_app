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
      .orWhere({
        category: 'sides'
      })
      .orWhere({
        category: 'drinks'
      })
      .then((rows) => {
        rows.forEach(item => {
          menu.pizza.push(item);
          menu.sides.push(item);
          menu.drinks.push(item);
        });
      });
    // res.json(menu);

    res.render('index', { menu });
  });

  return router;
};
