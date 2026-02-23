const express = require('express');
const router = express.Router();

router
.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/aboutus', (req, res) => {
  res.send('About Us');
});

router.get('/contactus', (req, res) => {
  res.send('Contact Us');
}); 

module.exports = router;