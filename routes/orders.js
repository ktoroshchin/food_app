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
        res.render('orders', { userOrder })
        })
        .catch((err) => {
          console.log(err);
          throw err;
        })
        .finally(() => {
          knex. destroy();
        });
      });

  router.post('/', (req, res) => {
    const userURL = generateRandomString();

    const userInfo = [{
      phone_number: req.params.body.phone_number, // placeholder name
      shortURL: userURL
    }];
    console.log(req.params.body);

    knex('users')
      .insert(userInfo)
      .then(() => {
        console.log('sucess');
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();
      });

    knex('users')
      .select('id')
      .where({
        shortURL: userURL
      })
      .then((rows) => {
        const user_id = rows;
        console.log(rows); // console log to ensure rows is proper - possibly should be rows[0]
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
    // get food id & quantity with loop

    const userOrder = [];
    for (var i = 0; i < req.params.food_id.length; i++) {
      userOrder.push({
        food_id: req.params.food_id[i], //placeholder
        user_id: user_id,
        quantity: 1 //req.params.quantity[i] //placeholder
      });
    }

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
      res.render("/:" + userURL);
    });
});
return router;
}
