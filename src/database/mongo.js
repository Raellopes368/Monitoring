const mongoose = require('mongoose');
const { user, pass, config } = require('../config/mongo');

mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0-8qmbp.mongodb.net/monitoring?retryWrites=true&w=majority`,
  config,
);
