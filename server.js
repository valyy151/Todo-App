const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', ' layouts/layout');

app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const loginRouter = require('./routes/login');
const supportRouter = require('./routes/support');

app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/login', loginRouter);
app.use('/support', supportRouter);

app.listen(process.env.PORT || 3000);
