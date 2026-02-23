const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.render('auth');
});


authRouter.get('/login', (req, res) => {
  res.render('login');
});

authRouter.get('/register', (req, res) => {
  res.render('register');
});

module.exports = authRouter;