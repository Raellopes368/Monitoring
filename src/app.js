/* eslint-disable comma-dangle */
const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const { setupSocket } = require('./websocket');

class App {
  constructor() {
    this.server = express();
    this.app = http.createServer(this.server);
    setupSocket(this.app);
    this.middlewares();
    this.security();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  security() {
    this.server.use((req, res, next) => {
      res.setHeader('X-Powered-By', 'PHP/7.4.1');
      return next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().app;
