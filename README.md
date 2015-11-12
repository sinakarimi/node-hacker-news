# Node Hacker News Feed

## About

Just a little node application used fetch articles from Hacker News that are related to Node.js

## Requirements

- nvm (https://github.com/creationix/nvm), NOTE: This is not required, just make sure that node version `0.12.7` is installed
- MongoDB (https://www.mongodb.org/downloads#production)

## Getting started

1. Update the `.env` file in the root directory of this project with relevant settings to suit your environment

2.  Run the following commands

```
nvm install
npm install
npm start
```
3. Visit `http://localhost:8080` (or whatever port you have set in your config)

## Fetching articles

Articles are fetched by running a worker server. This server runs on a timer of
1 hour, meaning it will fetch for articles once every hour as long as the worker
server process remains running.

To run the article worker server execute the following command

```
npm run worker:article
```

## Running tests

```
npm test
```
