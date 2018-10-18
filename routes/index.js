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
      .where( { category: 'pizza' } )
      .then((rows) => {
        rows.forEach(item => {
          menu.pizza.push(item);
        })
      })

      .select('*')
      .from('food_items')
      .where( { category: 'sides'})
      .then((rows) => {
        rows.forEach(item => {
          menu.sides.push(item);
        })
      })

      .select('*')
      .from('food_items')
      .where( { category: 'drinks'})
      .then((rows) => {
        rows.forEach(item => {
          menu.drinks.push(item);
        })
      })

      .catch((err) => { console.log(err); throw err})
      .finally(() => {
        knex.destroy()
      })
      res.json(menu);

  // res.render('inde', { menu });
=======
        });
      });
    res.json(menu);

    // res.render('index', { menu });
>>>>>>> 50a654b97e50c229af321bf877949e55d8265f56
  });

  return router;
};


