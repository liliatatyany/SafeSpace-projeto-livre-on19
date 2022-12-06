const mongoose = require('mongoose');

const password = 

mongoose.connect(
  "LINK DO MONGO" 
);

const db = mongoose.connection;

module.exports = db;