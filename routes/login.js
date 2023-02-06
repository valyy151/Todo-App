const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router
  .route('/:userId')
  .get((req, res) => {
    res.send(`Get user with the ID of ${req.params.userId}`);
  })
  .put((req, res) => {
    res.put(`Update user with the ID of ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.delete(`Delete user with the ID of ${req.params.userId}`);
  });

const users = [{ name: 'Vali' }, { name: 'Sanela' }];

router.param('userId', (req, res, next, userId) => {
  req.user = users[userId];
  next();
});

module.exports = router;
