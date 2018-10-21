'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {


  router.post('/', (req, res) => {
    const userURL = generateRandomString();
    let phone = '';

    if (!req.body.phone || isNaN(req.body.phone) || req.body.phone.length < 10) {
      // no number given or letters contained
      res.send('we need a phone number');
    }

    if (req.body.phone.length === 11) {
      phone = '+' + req.body.phone;
      // user inputed all numbers without ticks
    } else if (req.body.phone.length === 10) {
      phone = '+1' + req.body.phone;
      // all numbers without tick, without 1
    } else if (req.body.phone.length === 12) {
      phone = '+1' + req.body.phone.slice(0, 2) + req.body.phone.slice(4, 7) + req.body.phone.slice(8);
      // all numbers with tick, without 1
    } else if (req.body.phone.length === 14) {
      // all numbers with tick, with 1
      phone = req.body.phone;
    } else {
      res.send('invalid number - try again');
    }

    //for twilio =>"+14385551234"
    const userInfo = [{
      phone_number: phone,
      shortURL: userURL
    }];

    const clientItems = {};

    for (let item in req.body) {
      if (req.body[item] != 0) {
        clientItems[item] = req.body[item];
      }
    }

    let foodID = Object.keys(clientItems);
    foodID = foodID.slice(0, foodID.length - 1);
    // removes phone number

    const userOrder = [];
    const foodQty = [];

    knex('users')
      .insert(userInfo)
      .returning('id')
      .then((id) => {
        for (var i = 0; i < foodID.length; i++) {
          foodID[i] = Number(foodID[i]);
          foodQty.push(Number(clientItems[foodID[i]]));
          userOrder.push({
            food_id: foodID[i], // sent as string -> turn to number
            user_id: id[0],
            quantity: clientItems[foodID[i]]
          });
        }
        knex('order_details')
          .insert(userOrder)
          .then(() => {
            knex('food_items')
              .select('*')
              .whereIn('id', foodID)
              .then((names) => {
                let messageData = '';
                for (let i = 0; i < names.length; i++) {
                  messageData += `${names[i].item_name}: ${foodQty[i]}\n`;
                }
                console.log('Yeet:  ', messageData);
                const message =
                  `You have a new order from ${phone}\n Order: ${messageData}\n Estimate until ready (minutes)?`;
                const orderText = {
                  user_id: id[0],
                  restaurant_id: names[0].restaurant_id,
                  user_order: message
                };
                knex('texts')
                  .insert(orderText)
                  .then(() => {
                    res.cookie('shortURL', userURL);
                    res.redirect('/orders/' + userURL);
                  })
                  .catch((err) => {
                    console.log(err);
                    throw err;
                  })
                  .finally(() => {});
              });
          });
      });

  });


  router.get('/:shortURL', (req, res) => {
    knex('users')
      .select('*')
      .innerJoin('order_details', 'users.id', 'order_details.user_id')
      .innerJoin('food_items', 'order_details.food_id', 'food_items.id')
      .innerJoin('restaurants', 'restaurants.id', 'food_items.restaurant_id')
      .where({
        shortURL: req.params.shortURL
      })
      .then((userOrder) => {
        res.render('orders', {
          userOrder
        });
      }) // NEED TO FIX FINAL COST
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {});
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
