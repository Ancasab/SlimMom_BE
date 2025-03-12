# SlimMom-BE

This REST API allows you to calculate the daily calorie intake and keep track of the number of calories eaten per day. You can also get a list of products not recommended for consumption.

This REST API is used as a backend for [SlimMom-frontend](https://github.com/Ancasab/SlimMom-frontend) ([github](https://github.com/Ancasab/SlimMom-frontend))

## Usage

This REST API uses these endpoints:

Base URL: `https://slimmom-be-vtbp.onrender.com/api`

- **POST** `/auth/register` - create a new user
- **POST** `/auth/login` - log in in user
- **GET** `/auth/logout` - log out user

- **GET** `/users/current` - get user info

- **GET** `/products/:date` - get all user's eaten products per day
- **GET** `/products/?productName=productName` - search product in DB
- **DELETE** `/products/:productId` - delete eaten product
- **POST** `/products` - add a new eaten product
- **POST** `/calories` - get a calorie count and non-recommended foods for unregistered user
- **POST** `/calories/auth` - get a calorie count and non-recommended foods for registered user

To run on localhost use the following commands:

- `npm start` - start server in production mode
- `npm run start:dev` - start server in development mode
- `npm run lint` - run a code check execution with eslint
- `npm run lint:fix` - run a code check run with eslint with automatic fixes for simple errors

## Created with

:white_check_mark: Node.js  
:white_check_mark: Mongo DB  
:white_check_mark: Express
