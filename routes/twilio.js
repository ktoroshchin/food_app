'use strict';
const moment = require('moment');
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
        userPhone = text_info[0].phone_number; 
        console.log(text_info[0]);
        client.messages.create({
          to: restaurantPhone, // Text this number
          from: twilioPhone, // From a valid Twilio number
          body: text_info[0].user_order
        },
        function (err, data) {
          if (err) {
            console.log(err);
<<<<<<< HEAD
          } else {
            console.log(data.body);
          }
=======
          } else {}
>>>>>>> 4bacfcba70327b5cbbd604261eca8407f510f6dd
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
<<<<<<< HEAD
    const prepTime = req.body.Body;
    const readyTime = moment().add(prepTime, 'minutes').calendar();  
=======

    //instant message back to restaurant
    twiml.message(`Message received: ${req._startTime}\nMessage (ETA): ${req.body.Body}`);
>>>>>>> 4bacfcba70327b5cbbd604261eca8407f510f6dd

    //instant text message
    const confirmMessage = `Your order has been confirmed! Food Should Be Ready ${readyTime}`;

    // knex('users')
    //   .select('id')
    //   .where({
    //     shortURL: req.cookies['shortURL']
    //   })
    //   .then((id) => {
    //     knex('texts')
    //       .where({
    //         'user_id': id[0].id
    //       })
    //       .update({
    //         restaurant_text: 'req.body.Body',
    //         time_sent: 'req._startTime'
    //       })
    //       .catch((err) => {
    //         throw err;
    //       })
    //       .finally(() => {});
    //   });

    //message back to restaurant
    twiml.message(`Customer The Recevied Message at: ${req._startTime} \n Message (ETA): ${readyTime}`);

    client.messages.create({
      to: userPhone, // Text this number
      from: twilioPhone, // From a valid Twilio number
      body: confirmMessage
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data.body);
      }
    });

    res.writeHead(200, {
      'Content-Type': 'text/xml'
    });

<<<<<<< HEAD
=======
    knex('users')
      .select('id')
      .where({
        'phone_number': userPhone
      })
    .then((id) => {
      knex('texts')
        .where({
          'user_id': id[0]
        })
        .update({
          restaurant_text: req.body.Body,
          time_sent: req._startTime
        })
        .then(() => {

        })
        .catch((err) => {
          throw err;
        })
        .finally(() => {});
    })


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
>>>>>>> 4bacfcba70327b5cbbd604261eca8407f510f6dd
    res.end(twiml.toString());
  });



  return router;
};
