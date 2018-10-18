"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    const menu = { pizza: [] };
    knex
      .select('*')
      .from('food_items')
      .where( { category: 'pizza' } )
      .then((rows) => {
        rows.forEach(item => {
          menu.pizza.push(item);
        });
        res.render('index', { menu });
      });
    });
  return router;
};
