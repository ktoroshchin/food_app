'use strict';
const express = require('express');
const router = express.Router();


module.exports = (knex) => {

  router.get("/:id/orders", (req, res) => {
    knex
      .select('*')
      .from('users')
      .innerJoin('order_details','users.id','order_details.user_id')
      .innerJoin('food_items', 'order_details.food_id', 'food_items.id')
      .innerJoin('restaurants', 'restaurants.id', 'food_items.restaurant_id')
      .where('restaurants.id', req.params.id )
      .then((clientOrders) => {
        const orderObj = {};
        for(const order of clientOrders) {
          orderObj[order.shortURL] = orderObj[order.shortURL] || [];
          orderObj[order.shortURL].push(order);
        }
        res.render('admins', { orderObj: orderObj })
        // res.json(orderObj)
        })
    })
    return router;
}
