if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layout');

app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.once('open', () => console.log('Connected to Mongoose'));
db.on('error', (error) => console.error(error));

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const loginRouter = require('./routes/login');
const supportRouter = require('./routes/support');
const submitRouter = require('./routes/submit');

app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/login', loginRouter);
app.use('/support', supportRouter);
app.use('/submit', submitRouter);

app.get('/', (req, res) => {
  res.redirect('/index');
});

app.listen(process.env.PORT || 3000);
