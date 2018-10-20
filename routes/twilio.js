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
  const userPhone = '+15144244664';

  router.get('/twilio', function (req, res) {
    const message = 'You have a new order! from ' + userPhone + ', they ordered 1 greek pizza, one fry, and 1 soda. How long will this order take to prepare?';
    client.messages.create({
      to: '+14388860748', // Text this number
      from: '+14509991704', // From a valid Twilio number
      body: message
    },
    function (err, data) {
      if (err) {
        console.log(err);
      }
    });
  });


  router.post('/sms', function (req, res) {
    var twilio = require('twilio');
    var twiml = new MessagingResponse();

    //instant message back to restaurant
    twiml.message('Message recived at: \'' + req._startTime + '\', ' + 'Message: \'' + req.body.Body + '\', Order will take ' + req.body.Body + ' minutes until ready!');

    //instant text message
    const confirm = 'Your order has been confirmed, it will take' + req.body.Body + '!';
    client.messages.create({
      to: userPhone, // Text this number
      from: '+14509991704', // From a valid Twilio number
      body: confirm
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {}
    }
    );

    // console.log("Message recived at: '" + req._startTime + "', " + "Message: '" + req.body.Body + "', Order will take " + req.body.Body + " minutes until ready!");
    res.writeHead(200, {
      'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
  });
  return router;
};
