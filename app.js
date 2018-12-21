const express  = require('express');
const mongoose = require('mongoose');
const ejs      = require('ejs');
const app      = express();
const port     = 3000;
const Schema = mongoose.Schema;

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/pokesurvey-dev');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Poke-Survey connected to MongoDB');
});

let resultsSchema = new Schema({
  starter: String,
  game: String
});

let Results = mongoose.model('Results', resultsSchema);

// Delete previous test
Results.deleteOne({ starter: 'charmander'}, function (err) {
  if (err) console.log(err);
});

let vote = new Results({ starter: 'charmander' , game: 'redBlue' });

// Save test
vote.save(function (err, vote) {
  if (err) return console.log(err);
  console.log(vote.starter);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.get('/results', (req, res) => {
  res.render('results', {foo: 'FOO'});
});

app.get('/contact', (req, res) => {
  res.render('contact', {foo: 'FOO'});
});

app.listen(port, () => console.log(`Poke-Survey listening on port ${port}!`));