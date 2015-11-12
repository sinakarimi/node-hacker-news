# node-hacker-news

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

4. Run the following task to launch the article worker. This worker will request
new articles as soon as it's launched, then it will make a request every hour as long
as the process stays alive

```
npm run article-worker
```

## Running tests

```
npm test
```
