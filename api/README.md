# API WEB PUSH 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Requirements 

- Node 10.15.1 (using `.nvmrc`)

- Mongodb 

- [Mongoose](https://github.com/Automattic/mongoose)

## Install

Install the dependencies.

```sh
npm install
```

Run the server in development mode.

```sh
npm run dev
```

While in development mode; the app will listen for changes and reload automatically.

## Production

This repository uses [TypeScript](https://www.typescriptlang.org/). As such, you will need to compile it before you run the production version.

```sh
npm run compile && npm run start
```

Or alternatively, use typescript in production (this uses [ts-node](https://github.com/TypeStrong/ts-node)).

```sh
npm run start:ts
```

## HEROKU

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

### CI Deploy
````sh
git push heroku master (Work in progress)
````

## Database

Development
```sh
mongodb://localhost/webpush
```

Production (Mongo Atlas)
```sh
mongodb+srv://admin:[password]@cluster0-68gmt.mongodb.net/webpush?retryWrites=true
```

Configuration file `./environment/config.ts`
