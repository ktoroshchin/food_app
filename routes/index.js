"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("midterm")
  //     .then((results) => {
  //       res.json(results);
  //       res.render("root")
  //   });
  // });
  // return router;

  router.get("/", (req, res) => {
    knex('food_items')
      .groupBy('category')
      .then((result) => {
        res.json('result');
      // res.render("index");
  });
};
