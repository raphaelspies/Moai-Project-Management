const mongoose = require('mongoose');
const userSchema = require('./models/user.js')
const dotenv = require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = 'MVP-db';
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASS}@hrcluster.uq58l.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const localURL = 'mongodb://localhost:27017/MVP-db';

mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));

//firstName: { type: String, required: true }

const db = mongoose.connection;
module.exports = db;