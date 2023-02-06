const internal = require('stream');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const aboutRouter = require('./routes/about');
const loginRouter = require('./routes/login');
const supportRouter = require('./routes/support');
const bodyParser = require('body-parser');

app.use('/about', aboutRouter);
app.use('/login', log, loginRouter);
app.use('/support', supportRouter);

function log(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
