'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {


  router.post('/', (req, res) => {
    const userURL = generateRandomString();
    let phone = "";

    if(!req.body.phone || isNaN(req.body.phone) || req.body.phone.length < 10) {
      // no number given or letters contained
      res.send('we need a phone number')
    }

    if(req.body.phone.length === 11) {
      // user inputed all numbers without ticks
      phone = "+" + req.body.phone;
    } else if (req.body.phone.length === 10){
      // all numbers without tick, without 1
      phone = "+" + req.body.phone;
    } else if (req.body.phone.length === 12){
      // all numbers with tick, without 1
      phone = "+1" + req.body.phone.slice(0,2) + req.body.phone.slice(4,7)+ req.body.phone.slice(8);
    } else if (req.body.phone.length === 14){
      // all numbers with tick, with 1
      // it's good
      phone = req.body.phone;
    } else {
      res.send('invalid number - try again')
    }

//for twilio =>"+14385551234"
    const userInfo = [{
      phone_number: phone,
      shortURL: userURL
    }];
    console.log(req.body)
    const clientItems = {}
    for(let item in req.body) {
      if(req.body[item] != 0) {
       clientItems[item] = req.body[item];
       console.log(clientItems)
      }
    }

    let foodID = Object.keys(clientItems);
    foodID = foodID.slice(0, foodID.length - 1);
    // removes phone number

    const userOrder = [];

    knex('users')
      .insert(userInfo)
      .returning('id')
      .then((id) => {
        console.log(id[0])
          for (var i = 0; i < foodID.length; i++) {
            userOrder.push(
                { food_id: Number(foodID[i]), // sent as string -> turn to number
                  user_id: id[0],
                  quantity: Number(clientItems[foodID[i]])
                })
          }
          console.log(userOrder)
        knex('order_details')
          .insert(userOrder)
            .then(() => {
              res.redirect('/orders/' + userURL);
            })
            .catch((err) => {
              console.log(err);
              throw err;
            })
            .finally(() => {
              })
            });
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
      }) // NEED TO FIX FINAL COST
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        // knex.destroy();
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
