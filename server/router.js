const express = require('express');
const router = express.Router();

const users = require('./routes/users.js');
const login = require('./routes/login.js');
const messages = require('./routes/messages.js')

router.use('/users', users)
router.use('/login', login)
router.use('/messages', messages)

module.exports = router;