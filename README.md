# Node Skeleton

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Demos of the app

![Phone main](https://github.com/MikaelAbehsera/food_app/blob/master/media/phone_main1.jpg | width=400)

![main computer page opened](https://github.com/MikaelAbehsera/food_app/blob/master/media/computer_main1.png | width=400)

![Phone collapsed](https://github.com/MikaelAbehsera/food_app/blob/master/media/phone_main.jpg | width=400)

![main computer page collapsed](https://github.com/MikaelAbehsera/food_app/blob/master/media/computer_main.png | width=400)

![Phone Cart](https://github.com/MikaelAbehsera/food_app/blob/master/media/phone_cart.jpg | width=400)

![Cart page computer](https://github.com/MikaelAbehsera/food_app/blob/master/media/computer_cart.png | width=400)

![order cart computer](https://github.com/MikaelAbehsera/food_app/blob/master/media/order_confirmed.png | width=400)

![Admin page computer](https://github.com/MikaelAbehsera/food_app/blob/master/media/admin_page.png | width=400)









## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above

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
I want to know when I can pick up my order
Because I am busy and need to organize my schedule
Because I don't want to waste my time waiting for my order
Because I don't want to miss my order pickup and have my food go cold

Given that I made an order to pick up on the way to meet my friend
When I receive a text confirming the time to pick up
Then I can best decide when to leave the house


As a user
I want to make sure I made the proper order
Because sometimes I forget things

Given that I made an order and submitted it
When I get to the orders page I can double check my cart before confirming it
Then I know I ordered everything I wanted to


As a Restaurant owner
I want to check to check the orders that will be picked up
Because I can best organize my staff

Given that I can check all orders made to me via the admins page
When an order has been picked up
Then I can confirm it with a click of a button and remove it from the page

## Note to users

The API twilio necessitates the use of a server, Ngrok was used for the purpose of our presentation:
https://ngrok.com