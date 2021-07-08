const express = require('express');
const path = require('path');
const router = require('./router.js')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', router);

const PORT = process.env.PORT || 3000;

// app.listen((err, PORT) => {
//   if (err) {
//     console.log('error listening on port:', err)
//   } else {
//     console.log(`listening on port ${PORT}`)
//   }
// })

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
