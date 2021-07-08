const express = require('express');
const users = express.Router();
const db = require('../../db');
const User = require('../../db/models/user.js');
const bcrypt = require('bcrypt');
const cors = require('cors');

users
  .route('/')
  .get((req, res) => {
    User.find()
    .then(result => {
        console.log(result)
        res.status(200).send(result)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  });

users
  .route('/')
  .post((req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    user.save()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
  })


module.exports = users;