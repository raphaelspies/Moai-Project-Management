const express = require('express');
const login = express.Router();
const db = require('../../db');
const User = require('../../db/models/user.js');

login
  .route('/')
  .post((req, res) => {
    let { userName, password } = req.body;
    console.log(userName)
    User.findOne({userName: userName, password: password})
    // User.find()
    .then(response => {
      console.log(response)
      if (response.length !== 0) {
        res.status(200).send(response)
      } else {
        console.log('Error: user/password combination not found')
        res.status(400).send("Error: user/password combination not found")
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
  })

module.exports = login;