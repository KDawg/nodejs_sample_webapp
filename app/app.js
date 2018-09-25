/* eslint no-underscore-dangle: ["error", { "allow": ["__express"] }] */
const fs = require('fs');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const config = require('./config');
const routes = require('./routes.js');

const app = express();

function SetupHandlebars() {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'html');
  app.engine('html', hbs.__express);
}

function SetupLogging() {
  if (process.env.NODE_ENV !== 'test') {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'w' });
    app.use(logger('dev', { stream: accessLogStream }));
  }
}

function SetupParsingPublic() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public')));
}

function SetupServer() {
  SetupHandlebars();
  SetupLogging();
  SetupParsingPublic();
}

function SetupRoutes() {
  routes.setup(app);
}

function RunServer() {
  app.listen(config.port, config.ip, () => {
    console.log(`WebServer is listening on [${config.ip}][${config.port}] in [${process.env.NODE_ENV}] mode`);
  });
}

SetupServer();
SetupRoutes();
RunServer();
