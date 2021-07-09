const express = require('express');
const path = require('path');
const router = require('./router.js')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

// morgan(function (tokens, req, res) {
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'
//   ].join(' ')
// })

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(morgan('tiny'));
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
