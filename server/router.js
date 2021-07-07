const express = require('express');
const router = express.Router();

const users = require('./routes/users.js');
const login = require('./routes/login.js');

router.use('/users', users)
router.use('/login', login)

module.exports = router;