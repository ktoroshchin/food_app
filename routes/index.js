'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {

<<<<<<< HEAD
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
=======
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
      })
    })

    .select('*')
    .from('food_items')
    .where({
      category: 'sides'
    })
    .then((rows) => {
      rows.forEach(item => {
        menu.sides.push(item);
      })
    })

    .select('*')
    .from('food_items')
    .where({
      category: 'drinks'
    })
    .then((rows) => {
      rows.forEach(item => {
        menu.drinks.push(item);
      })
    })

    .catch((err) => {
      console.log(err);
      throw err
    })
    .finally(() => {
      knex.destroy()
    })
  res.json(menu);

  // res.render('inde', { menu });
});
});
// res.json(menu);

res.render('index', {
menu
});
});
return router;
>>>>>>> 04bac8a44688e0ccf3d9ff3bf3b702c6972c2d28
};
