'use strict';
const express = require('express');
const router = express.Router();

function generateRandomString() {
  const possible = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let randomID = '';
  for (let i = 0; i < 10; i++) {
    randomID = randomID + possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomID;
}


module.exports = (knex) => {
  router.get('/:shortURL', (req, res) => {
    knex
      .select('*')
      .from('users')
      .innerJoin('order_details','users.id','order_details.user_id')
      .innerJoin('food_items', 'order_details.food_id', 'food_items.id')
      .where({
        shortURL: req.params.shortURL
      })
      .then((userOrder) => {
        res.json(userOrder: userOrder)
        })
        .catch((err) => {
          console.log(err);
          throw err;
        })
        .finally(() => {
          // knex. destroy();
        });
      });

router.post('/', (req, res) => {
  const userURL = generateRandomString();

  const userInfo = [{
    phone_number: req.params.phone_number,
    shortURL: userURL
  }];

  knex('users')
    .insert(userInfo)
    .then(() => {
      console.log('sucess')
    })
    .catch((err) => {
      console.log(err);
      throw err
    })
    .finally(() => {
      knex.destroy()
    });

  knex
    .select('id')
    .from('users')
    .where({
      shortURL: userURL
    })
    .then((rows) => {
      const user_id = rows
    })

  const userOrder = [{
    food_id: 4,
    user_id: user_id,
    quantity: req.params.quantity
  }];


  knex('order_details')
    .insert(userOrder)
    .then(() => {
      console.log('sucess')
    })
    .catch((err) => {
      console.log(err);
      throw err
    })
    .finally(() => {
      knex.destroy()
    });
});
return router;
}
