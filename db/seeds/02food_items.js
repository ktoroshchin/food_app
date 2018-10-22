const faker = require("faker");

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries

  return Promise.all([
    knex.raw("ALTER SEQUENCE food_items_id_seq RESTART WITH 1"),
    knex("food_items").del()
      .then(function () {
        return Promise.all([
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "The Classic",
            price: 8,
            photo_URL: "http://foodierestaurantstexas.com/wp-content/uploads/applebees-neighborhood-grill-bar-restaurants-in-irving-tx.png",
            category: "burgers"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "The McDave",
            price: 7,
            photo_URL: "https://static.olocdn.net/menu/applebees/c8bede75bcfce6120d010dd551b4a41f.jpg",
            category: "burgers"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Classic Cheeseburger",
            price: 9,
            photo_URL: "https://static.olocdn.net/menu/applebees/ef96fd56d8977077be7d23070bd08b3c.jpg",
            category: "burgers"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Bacon Delux",
            price: 10,
            photo_URL: "https://www.mrdelivery.com/editable/images/menuheading/156749.jpg",
            category: "burgers"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Thin Bun Burger",
            price: 8,
            photo_URL: "https://static.olocdn.net/menu/applebees/7102e6072d409e0c2af928be48c97c8c.jpg",
            category: "burgers"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Wild Western",
            price: 11,
            photo_URL: "http://blog.visitbellevuewashington.com/wp-content/uploads/2015/04/Lunchbox-Laboratory-James-West-Burger.jpg",
            category: "burgers"
          }),


          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Chicken Salad",
            price: 4,
            photo_URL: "http://www.iftarparty.com/recipes/wp-content/uploads/2017/05/lunch-dinner_soups-salads_crispy-chicken-salad.jpg",
            category: "sides"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Regular Salad",
            price: 4,
            photo_URL: "https://realfood.tesco.com/media/images/Indian-style-cucumber-saladl-2f65bb2e-31e6-4cde-b39f-3e1c54e2114b-0-1400x919.jpg",
            category: "sides"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Garlic Bread",
            price: 3,
            photo_URL: "https://www.simplyrecipes.com/wp-content/uploads/2006/09/garlic-bread-horiz-a2-1800.jpg",
            category: "sides"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Churros",
            price: 5,
            photo_URL: "https://assets.bonappetit.com/photos/58ff5f162278cd3dbd2c069c/16:9/w_1200,c_limit/churros.jpg",
            category: "sides"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Fries",
            price: 3,
            photo_URL: "https://www.seriouseats.com/2018/04/20180309-french-fries-vicky-wasik-15-1500x1125.jpg",
            category: "sides"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Curly Fries",
            price: 4,
            photo_URL: "https://cdn.instructables.com/F9N/HDOL/HM8CXCYA/F9NHDOLHM8CXCYA.LARGE.jpg",
            category: "sides"
          }),


          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Water In A Bottle",
            price: 1,
            photo_URL: "http://cdn.shopify.com/s/files/1/1742/7295/products/Water_Bottle_-_No_Brand_1024x1024.jpg?v=1498001866",
            category: "drinks"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Iced Tea",
            price: 2,
            photo_URL: "https://content.etilize.com/2000/1032527967.jpg",
            category: "drinks"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Cola",
            price: 2,
            photo_URL: "https://cdn0.woolworths.media/content/wowproductimages/large/093167.jpg",
            category: "drinks"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Orange Fanta",
            price: 2,
            photo_URL: "https://cdn0.woolworths.media/content/wowproductimages/large/032812.jpg",
            category: "drinks"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Dr Pepper",
            price: 2,
            photo_URL: "https://i5.walmartimages.com/asr/364cc6d5-c93f-4c91-9783-8d4eeab3ecec_1.47aa5c3af97b76d1e527d601eceac782.jpeg",
            category: "drinks"
          }),
          knex("food_items").insert({
            restaurant_id: 1,
            item_name: "Rootbeer",
            price: 2,
            photo_URL: "https://i5.walmartimages.com/asr/ac7221f2-efda-47cf-a7ea-0fd4187cf1d4_1.f3f8ded28770b6e24ae1f2ed404b8b28.jpeg",
            category: "drinks"
          }),

        ]);
      })
  ]);
};
