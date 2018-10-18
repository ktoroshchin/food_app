"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/:user_id", (req, res) => {
    // .then((result) => {
      res.redirect("order");
  // });
});
return router;
}
