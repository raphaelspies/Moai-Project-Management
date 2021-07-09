const express = require('express');
const messages = express.Router();
const db = require('../../db');
const Message = require('../../db/models/message.js');
const bcrypt = require('bcrypt')

  // "Sender": "johnsmith",
  // "Subject": "I have reached North America",
  // "Date": "05-14-1607",
  // "Project": "Build Chesapeake",
  // "Trade": "Tobacco Cropper",


messages
  .route('/all')
  .get((req, res) => {
    Message.find()
    .then(allMessages => {
      console.log(allMessages)
      res.status(200).send(allMessages)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  });

messages
  .route('/sender/:Sender')
  .get((req, res) => {
    Message.find({ Sender: Sender })
    .then(messagesFrom => {
      console.log(messagesFrom)
      res.status(200).send(messagesFrom)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  });

messages
  .route('/post/')
  .post((req, res) => {
    const message = new Message(req.body);
    console.log(message);
    message.save()
    .then(confirmation => {
      console.log(confirmation);
      res.status(200).send(confirmation);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })
  });

  module.exports = messages;