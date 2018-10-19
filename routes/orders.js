'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {


  router.post('/', (req, res) => {
    const userURL = generateRandomString();

    const userInfo = [{
      phone_number: req.body.phone,
      shortURL: userURL
    }];

    let foodID = Object.keys(req.body);
    foodID = foodID.slice(0,foodID.length-1);
    // removes phone number
    // remove all keys
    const userOrder = [];

    knex('users')
      .insert(userInfo)
      .returning('id')
      .then((id) => {
          for (var i = 0; i < foodID.length; i++) {
            userOrder.push(
                { food_id: foodID[i], // sent as string -> turn to number
                  user_id: id,
                  quantity: req.body[foodID[i]]
                })
          }
        knex('order_detail')
          .insert(userOrder)
            .then(() => {
              console.log('success');
              res.redirect('/' + userURL);
            })
            .catch((err) => {
              console.log('NO SUCESS')
              console.log(err);
              throw err;
            })
            .finally(() => {
              console.log('ya made it to finally')
              res.send('bye')
              knex.destroy();
              })
            });
              res.send('nope try again')
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
        console.log(req.params.shortURL)
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
};



function generateRandomString() {
  const possible = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let randomID = '';
  for (let i = 0; i < 10; i++) {
    randomID = randomID + possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomID;
}
