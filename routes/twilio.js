'use strict';
const express = require('express');
const router = express.Router();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = (knex) => {

  //twilio example
  const MessagingResponse = require("twilio").twiml.MessagingResponse;

  //twilio example
  let userPhone = '+15144244664';
  const twilioPhone = '+14509991704';

  router.get('/', function (req, res) {

    knex('texts')
      .select('*')
      .innerJoin('users', 'users.id', 'texts.user_id')
      .where({
        shortURL: req.params.shortURL
      })
      .then((text_info) => {
          userPhone = user.phone_number;
          message = texts.user_order;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
      });


    client.messages.create({
        to: userPhone, // Text this number
        from: twilioPhone, // From a valid Twilio number
        body: message
      },
      function (err, data) {
        if (err) {
          console.log(err);
        } else {}
      }
    );
  });


  router.post('/sms', function (req, res) {
    var twilio = require("twilio");
    var twiml = new MessagingResponse();

    //instant message back to restaurant
    twiml.message(`Message received: ${req._startTime}\nMessage (ETA): ${req.body.Body}`);

    //instant text message
    const confirm = `Your order has been confirmed! Estimated time til pick up: ${req.body.Body}`;

    // IN GET SMS
    // once restaurant has confirmed time -> update page
    // in div insert text
    $('#TIME_FOR_PICKUP').replaceWith(`Time to pick up: ${req.body.Body}`);

    client.messages.create({
        to: userPhone, // Text this number
        from: twilioPhone, // From a valid Twilio number
        body: confirm
      },
      function (err, data) {
        if (err) {
          console.log(err);
        } else {}
      }
    );

    res.writeHead(200, {
      "Content-Type": "text/xml"
    });
    res.end(twiml.toString());
  });
  return router;
}


