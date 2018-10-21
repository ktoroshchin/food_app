'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {



  router.get('/', (req, res) => {
    knex('food_items')
      .select('*')
      .then((data) => {
        const menu = {
          burgers: [],
          sides: [],
          drinks: []
        };
        data.forEach(item => {
          if (item.category === 'burgers') {
            menu.burgers.push(item);
          } else if (item.category === 'sides') {
            menu.sides.push(item);
          } else if (item.category === 'drinks') {
            menu.drinks.push(item);
          }
        });
        console.log(menu.drinks);
        res.render('index', {
          menu: menu
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
      });
  });
  return router;
};
