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
    knex('food_items')
      .select('*')
      .then((data) => {
        data.forEach(item => {

          if (item.category === 'pizza') {
            menu.pizza.push(item);
          } else if (item.category === 'sides') {
            menu.sides.push(item);
          } else if (item.category === 'drinks') {
            menu.drinks.push(item);
          }

        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();

        res.render('index', {
          menu: menu
        });
      });
<<<<<<< HEAD
=======




    //  res.json(menu);
>>>>>>> origin
  });
  return router;
};
