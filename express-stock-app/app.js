const express = require('express');
const app = express();
const port = 3000;

//routes for my express app

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/aboutus', (req, res) => {
  res.send('About Us');
});

app.get('/contactus', (req, res) => {
  res.send('Contact Us');
}); 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});