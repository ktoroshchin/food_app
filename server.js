"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require('body-parser');
const sass = require("node-sass-middleware");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");

// Seperated Routes for each Resource
const orderRoutes = require("./routes/orders");
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//twilio example
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const MessagingResponse = require("twilio").twiml.MessagingResponse;

//twilio example
const userPhone = "+15144244664";

app.get("/twilio", function(req, res) {
  const message = "You have a new order! from " + userPhone + ", they ordered 1 greek pizza, one fry, and 1 soda. How long will this order take to prepare?"
  client.messages.create(
    {
      to: '+14388860748', // Text this number
      from: "+14509991704", // From a valid Twilio number
      body: message
    },
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        // console.log("DATA:  ", data);
      }
    }
  );
});

//twilio example
app.post("/sms", function(req, res) {
  var twilio = require("twilio");
  var twiml = new MessagingResponse();

  //instant message back to restaurant
  twiml.message("Message recived at: '" + req._startTime + "', " + "Message: '" + req.body.Body + "', Order will take " + req.body.Body + " minutes until ready!");
  
  //instant text message 
  const confirm = 'Your order has been confirmed, it will take' + req.body.Body + '!';
  client.messages.create(
    {
      to: userPhone, // Text this number
      from: "+14509991704", // From a valid Twilio number
      body: confirm
    },
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        // console.log("DATA:  ", data);
      }
    }
  );

  // console.log("Message recived at: '" + req._startTime + "', " + "Message: '" + req.body.Body + "', Order will take " + req.body.Body + " minutes until ready!");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});
//twilio examplez end


app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded"
  })
);
app.use(express.static("public"));

// Mount all resource routes

app.use("/", indexRoutes(knex));
app.use("/orders", orderRoutes(knex));
app.use("/admins", adminRoutes(knex));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
