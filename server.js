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

app.use('/about', aboutRouter);
app.use('/login', loginRouter);
app.use('/support', supportRouter);

app.listen(3000);
