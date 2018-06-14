const mongoose = require('mongoose');

const bluebird = require('bluebird')

mongoose.Promise = require('bluebird');

const db = mongoose.connect('mongodb://localhost/listadecompras', { promiseLibrary: bluebird })
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

require('./models/ProductModel');

module.exports = db;
