## Getting Started

1. Clone the project.
2.Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
7. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
8. Run the server: `npm run local`
9. Visit `http://localhost:8080/`

## Dependencies
- body-parser
- cookie-parser
- dotenv
- ejs
- express
- knex
- knex-logger
- moment
- morgan
- node-sass-middleware
- pg
- twilio

#### Keep scrolling after the demo pictures

# Demos of the app 

<img src="https://github.com/MikaelAbehsera/food_app/blob/master/media/phone_main1.jpg" alt="Phone main" width="350" >

![main computer page opened](https://github.com/MikaelAbehsera/food_app/blob/master/media/computer_main1.png)

<img src="https://github.com/MikaelAbehsera/food_app/blob/master/media/phone_main.jpg" alt="Phone collapsed" width="350" >

![main computer page collapsed](https://github.com/MikaelAbehsera/food_app/blob/master/media/computer_main.png)

<img src="https://github.com/MikaelAbehsera/food_app/blob/master/media/phone_cart.jpg" alt="Phone main" width="350">

![Cart page computer](https://github.com/MikaelAbehsera/food_app/blob/master/media/computer_cart.png)

![order cart computer](https://github.com/MikaelAbehsera/food_app/blob/master/media/order_confirmed.png)

![Admin page computer](https://github.com/MikaelAbehsera/food_app/blob/master/media/admin_page.png)

## Features

- Database holds every item which The Restaurant wishes to sell/present to the user
- This includes the item's name, price, a picture, and a "category" - to allow for better organization in the menu section
- The Restaurant's items are displayed on the root page; item name, price, and a picture, all sorted by category which are collapsable for user's convenience 
- The Restaurant's menu index is available on mobile as well - with altered graphics to best fit size
- No login required
- After making their choices, the user enters a phone number for contact and is directed to the order page
- The order page displays the user's selected choices and awaits for confirmation
- Once confirmed, the user order is sent - via text message - to The Restaurant (staff member)
- The Restaurant replies to the order with an approximate wait time, which is directly sent to the user; the Restaurant receives confirmation text that
- Text messages sent using API: twilio


## User Stories

As a user
I want to know when I can pick up my order,
because I am busy,
because I don't want to waste my time ordering my food in person and waiting for my order,
I would like to walk in and out with my order right away,
I would also like to get a reminder when I should pick up my order.

Given that I made an order to pick up,
I receive a text confirming the local time to pick up, 
Using an Iphone allows me to setup a quick reminder just from the text I have recived,
and with that I can best decide when to leave the house.


As a user
I want to make sure I made the proper order,
sometimes I forget some items that I would like,

Given that I made an order and submitted it,
When I get to the orders page I can double check my cart before confirming it,
Then I know I have not missed anything.


As a Restaurant owner,
I want to check the orders that have been ordered,

Given that I can check all orders made to me via the admins page,
When an order has been picked up,
I can confirm it with a click of a button and remove it from the page.

## Note to users

The twilio API necessitates the use of a server, Ngrok was used for the purpose of our presentation:
https://ngrok.com
