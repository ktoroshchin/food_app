'use strict';
const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/:id/orders', (req, res) => {
    knex
      .select('*')
      .from('users')
      .innerJoin('order_details', 'users.id', 'order_details.user_id')
      .innerJoin('food_items', 'order_details.food_id', 'food_items.id')
      .innerJoin('restaurants', 'restaurants.id', 'food_items.restaurant_id')
      .where('restaurants.id', req.params.id)
      .where('picked_up', 0)
      .then((clientOrders) => {
        const orderObj = {};
        for (const order of clientOrders) {
          orderObj[order.shortURL] = orderObj[order.shortURL] || [];
          orderObj[order.shortURL].push(order);
        }
        res.render('admins', {
          orderObj: orderObj
        });
      });
  });

  router.post('/', (req, res) => {
    console.log('IN THE POST');
    knex('order_details')
      .select('*')
      .innerJoin('users', 'users.id', 'order_details.user_id')
      .where({
        user_id: req.body.data_id
      })
      .update({
        picked_up : 1
      })
      .catch((err) => {
        console.log(err); throw err;
      })
      .finally(() => {
        console.log('in the update');
      });
  });

  return router;
};
