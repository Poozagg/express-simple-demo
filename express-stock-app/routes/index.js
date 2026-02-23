const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'HomePage'}); //'index' is the name of the EJS template to render, passing JS object to pug template as title variable
});

router.get('/aboutus', (req, res) => {
  res.render('aboutus', {title: 'About Us'});
});

router.get('/contactus', (req, res) => {
  res.render('contactus', {title: 'Contact Us'});
}); 

module.exports = router;