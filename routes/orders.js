'use strict';
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
<<<<<<< HEAD
  router.get("/:user_id", (req, res) => {
=======

<<<<<<< HEAD

  router.get('/:user_id', (req, res) => {
    const userOrder = {

    }

    res.redirect('order', userOrder);
  });


return router;
}


function generateRandomString() {
  const possible  = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let randomID = '';
  for(let i=0; i<10; i++){
    randomID = randomID + possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomID;
}



// router.post('/', (req, res) => {
//   const userURL = generateRandomString();

//   const userInfo = [{
//     phone_number : req.params.phone_number,
//     shortURL : userURL
//   }];

//   knex('users')
//     .insert(userInfo)
//     .then(() => { console.log('sucess')})
//     .catch((err) => { console.log(err); throw err})
//     .finally(() => {
//       knex.destroy()
//     });

//     knex
//       .select('id')
//       .from('users')
//       .where({shortURL: userURL})
//       .then((rows) => {
//         const user_id = rows
//       })

//   const userOrder = [{
//     food_id: 4,
//     user_id : user_id,
//     quantity: req.params.quantity
//   }];


//   knex('order_details')
//     .insert(userOrder)
//     .then(() => { console.log('sucess')})
//     .catch((err) => { console.log(err); throw err})
//     .finally(() => {
//       knex.destroy()
//     });

// })
=======
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
>>>>>>> 04bac8a44688e0ccf3d9ff3bf3b702c6972c2d28
    // .then((result) => {
    res.redirect('order');
  // });
  });
  return router;
};
>>>>>>> 50a654b97e50c229af321bf877949e55d8265f56
