const express = require('express');
const siteRoutes = require('./routes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

//for css styling and other static files like images, js files, etc.
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/', siteRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});