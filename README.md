# merngo


## Demo

[DemoSite](https://lit-stream-77660.herokuapp.com).

## Started:

- mongod
- npm install
- npm start

Development is a breeze. Once you have installed all your dependencies all the configuration is done for you. using simple The process is outlined [here](docs/development.md).

## Git

- git checkout master
- git pull

- git checkout -b feature/1-Floationg
- git push origin +feature/1-Floationg
- git push origin feature/1-Floationg
- git pull origin feature/1-Floationg

- git commit -m "[1, subtasks 4] fix(floationg) Floationg fix"

#### Redux DevTools

You will have to install redux devtools extension from [here](https://github.com/zalmoxisus/redux-devtools-extension) and then everything should just work!

## Instructions

#### Database

We currently support MongoDB and Postgres, as well as the ability to not use any database. [Learn](docs/databases.md) about how to configure your app.

#### Development

Development is a breeze. Once you have installed all your dependencies all the configuration is done for you. using simple The process is outlined [here](docs/development.md).

#### UI
##### Front-end framework:
- React-bootstrap [getting-started](https://react-bootstrap.github.io/getting-started.html)
- React-bootstrap components [here](https://react-bootstrap.github.io/components.html)

#### Unit Tests

Testing with:
- `mocha` as the test framework
	- We find all the files we need that have a `-test.js` suffix in the `/app` directory.
- `jsdom` as my test environment

```bash
# Run test once
npm test

# Run in watch mode
npm test:watch
```

We have unit tests for async (redux) actions, reducers, and stateless components with [enzyme](http://airbnb.io/enzyme).

License
===============
MIT
