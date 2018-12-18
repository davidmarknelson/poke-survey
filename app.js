const express  = require('express');
const ejs      = require('ejs');
const app      = express();
const port     = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.listen(port, () => console.log(`Poke-Survey listening on port ${port}!`))