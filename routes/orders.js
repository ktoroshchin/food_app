'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {


  router.post('/', (req, res) => {
        const userURL = generateRandomString();

        const userInfo = [{
          phone_number: req.body.phone, // placeholder name
          shortURL: userURL
        }];

        const userOrder = [];
        for (var i = 0; i < req.params.food_id.length; i++) {
          userOrder.push({
            food_id: req.params.food_id[i], //placeholder
            user_id: user_id,
            quantity: 1 //req.params.quantity[i] //placeholder
          });
        }

        knex('users')
          .insert(userInfo)
          .returning('id')
          .then((id) => {
            knex('order_detail')
            .insert(userOrder)
              .then(() => {
                console.log('success');
              })
              .catch((err) => {
                console.log(err);
                throw err;
              })
              .finally(() => {
                res.render('/:' + userURL);
              });

          })


        knex('users')
          .insert(userInfo)
          .then(() => {
            console.log('success');
          })
          .catch((err) => {
            console.log(err);
            throw err;
          })
          .finally(() => {});

        knex('users')
          .select('id')
          .where({
            shortURL: userURL
          })
          .then((rows) => {
            const user_id = rows;
            console.log('ROWS ROWS ROWS: ', rows[0]); // console log to ensure rows is proper - possibly should be rows[0]
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
        // get food id & quantity with loop

 });

  router.get('/:shortURL', (req, res) => {
    knex('users')
      .select('*')
      .innerJoin('order_details', 'users.id', 'order_details.user_id')
      .innerJoin('food_items', 'order_details.food_id', 'food_items.id')
      .where({
        shortURL: req.params.shortURL
      })
      .then((userOrder) => {
        res.render('orders', {
          userOrder
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();
      });
  });

  return router;

}


function generateRandomString() {
  const possible = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let randomID = '';
  for (let i = 0; i < 10; i++) {
    randomID = randomID + possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomID;
}


