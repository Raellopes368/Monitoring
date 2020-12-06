/* eslint-disable comma-dangle */
const express = require('express');
const io = require('socket.io');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.app = http.createServer(this.server);
    this.middlewares();
    this.security();
    this.routes();
    this.io = io(this.app, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
      },
    });
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
