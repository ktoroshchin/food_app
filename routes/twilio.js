'use strict';
const express = require('express');
const router = express.Router();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = (knex) => {

  //twilio example
  const MessagingResponse = require('twilio').twiml.MessagingResponse;

  //twilio example

  let userPhone;
  let restaurantPhone = '+15144244664';
  const twilioPhone = '+14509991704';
  // global? available to get & post?


  router.get('/', function (req, res) {

    knex('texts')
      .select('*')
      .innerJoin('users', 'users.id', 'texts.user_id')
      .where({
        shortURL: req.cookies['shortURL']
      })
      .then((text_info) => {
        userPhone = text_info[0].phone_number; ///
        client.messages.create({
          to: restaurantPhone, // Text this number
          from: twilioPhone, // From a valid Twilio number
          body: text_info[0].user_order
        },
        function (err, data) {
          if (err) {
            console.log(err);
          } else {}
        }
        );
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {});

  });


  router.post('/sms', function (req, res) {
    var twilio = require('twilio');
    var twiml = new MessagingResponse();

    //instant message back to restaurant
    twiml.message(`Message received: ${req._startTime}\nMessage (ETA): ${req.body.Body}`);

    //instant text message
    const confirmMessage = `Your order has been confirmed! Estimated time til pick up: ${req.body.Body}`;

    client.messages.create({
      to: userPhone, // Text this number
      from: twilioPhone, // From a valid Twilio number
      body: confirmMessage
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });

    res.writeHead(200, {
      'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
  });

  return router;
};
