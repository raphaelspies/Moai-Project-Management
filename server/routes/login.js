const express = require('express');
const login = express.Router();
const db = require('../../db');

login
  .route('/')
  .get((req, res) => {
    res.status(200).send('hello from login!')
  })

module.exports = login;