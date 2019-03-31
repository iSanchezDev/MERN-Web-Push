# API WEB PUSH 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Requirements 

- Node ^10.15.1
- npm ^6.4.1^
- Mongodb 4.0.4


## Installation

```sh
npm install
```

## Development

```sh
npm run dev
```
- *Required Mongodb running at `mongodb://localhost:27017`* 

- *While in development mode; the app will listen for changes and reload automatically.*

## Production

This repository uses [TypeScript](https://www.typescriptlang.org/). As such, you will need to compile it before you run the production version.

```sh
npm run build && npm run start
```

Or alternatively, use typescript in production (this uses [ts-node](https://github.com/TypeStrong/ts-node)).

```sh
npm run start:ts
```

## Testing

```sh
npm run test
```
A test suite was created for CRUD, we can use in both environments.

## Featured

### API
- API Rest on [TypesScript](https://github.com/Microsoft/TypeScript)
- Development and production
- Mongodb local + Atlas as public database for production
- [Postman](https://www.getpostman.com) Collection (docs)
- Notification CRUD 
- Testing [Jest](https://jestjs.io/)
- API offers built HTML for production mode
- [Lodash](https://lodash.com/docs/4.17.11)

##### Work in progress
- [Heroku](https://dashboard.heroku.com) deployed but a mongodb Atlas error connection is unsolved yet.


## Heroku (WIP)

```sh 
npm i heroku -g 
```

```sh 
heroku create 
```

```sh
heroku git:remote -a [heroku-git-generated]
```

Using from api folder (as production)
````sh
git subtree push --prefix api heroku master
````

[Guide For buildpack](https://medium.com/@timanovsky/heroku-buildpack-to-support-deployment-from-subdirectory-e743c2c838d+d)

From `api/` folder execute this command to compile:
````sh
git push heroku master
````
