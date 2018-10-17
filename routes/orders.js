'use strict';
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

  router.get('/:user_id', (req, res) => {
    // .then((result) => {
    res.redirect('order');
  // });
  });
  return router;
};
