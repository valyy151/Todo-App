const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('support');
});

router.get('/submit', (req, res) => {
  res.render('submit');
});

router.post('/submit', (req, res, next) => {
  console.log('sanela');
  next();
});

module.exports = router;
