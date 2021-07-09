const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  Sender: {type: String, required: true},
  Subject: {type: String},
  Text: {type: String},
  Date: {type: Date},
  Project: {type: String},
  Trade: {type: String}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;