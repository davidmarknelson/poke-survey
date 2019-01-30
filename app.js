const express  = require('express');
const mongoose = require('mongoose');
const ejs      = require('ejs');
const app      = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const Vote = require('./models/vote.js');
const ejsHelpers = require('./public/scripts/main.js');
const pokemonDataFile = require('./public/scripts/data.js');
const gamesData = require('./public/scripts/gamesData.js');
const Fingerprint = require('express-fingerprint');
const port     = 3000;
const flash = require('express-flash');
const session = require('express-session');

// Set up express-fingerprint object
app.use(Fingerprint());

// Set up express-flash
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}));
app.use(flash());

app.use(function(req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// Set up the Method Override settings
app.use(methodOverride('_method'));

// Set view engine and ip settings
app.set('view engine', 'ejs');
app.set('trust proxy', true); 

// Set public file and body-parser settings
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB and Mongoose settings
mongoose.connect('mongodb://localhost/pokesurvey-dev');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Poke-Survey connected to MongoDB');
});

// Landing page
app.get('/', (req, res) => {
  res.render('index', {page: 'index'});
});

//Survey routes
app.get('/survey', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOne({ fingerprint: fingerprint }, (err, returnedVote) => {
    if (err) {
      console.log(err);
    } else {
      let previousVote = returnedVote;
      res.render('survey', {pokemonData: pokemonDataFile, 
                            helpers: ejsHelpers,
                            fingerprint: fingerprint, 
                            previousVote: previousVote, 
                            gamesData: gamesData, 
                            page: 'survey'}
      );
    }
  });
});

app.post('/survey', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  let newVote = {
    fingerprint: req.fingerprint.hash,
    date: new Date(),
    gen1: req.body.gen1,
    gen2: req.body.gen2,
    gen3: req.body.gen3,
    gen4: req.body.gen4,
    gen5: req.body.gen5,
    gen6: req.body.gen6,
    gen7: req.body.gen7,
    gen1e: req.body.gen1e,
    gen2e: req.body.gen2e,
    gen3e: req.body.gen3e,
    gen4e: req.body.gen4e,
    gen5e: req.body.gen5e,
    gen6e: req.body.gen6e,
    gen7e: req.body.gen7e,
    legendaryBirds: req.body.legendaryBirds,
    legendaryBeasts: req.body.legendaryBeasts,
    legendaryTitans: req.body.legendaryTitans,
    weatherTrio: req.body.weatherTrio,
    creationTrio: req.body.creationTrio,
    taoTrio: req.body.taoTrio,
    auraTrio: req.body.auraTrio,
    lightTrio: req.body.lightTrio,
    gamesList: req.body.gamesList
  };

  Vote.findOne({ fingerprint: fingerprint }, (err, previousVote) => {
    if (err) { console.log(err); }
    if (previousVote === null) {
      Vote.create(newVote, (err, newVote) => {
        if (err) {
          console.log(err);
        } else {
          req.flash('success', 'Votes successfully submitted!');
          res.redirect('/results');
        }
      });
    } else {
      req.flash('error', 'You have already voted!');      
      res.redirect('/survey');
    }
  });  
});

app.put('/survey', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  let changedVote = {
    fingerprint: req.fingerprint.hash,
    date: new Date(),
    gen1: req.body.gen1,
    gen2: req.body.gen2,
    gen3: req.body.gen3,
    gen4: req.body.gen4,
    gen5: req.body.gen5,
    gen6: req.body.gen6,
    gen7: req.body.gen7,
    gen1e: req.body.gen1e,
    gen2e: req.body.gen2e,
    gen3e: req.body.gen3e,
    gen4e: req.body.gen4e,
    gen5e: req.body.gen5e,
    gen6e: req.body.gen6e,
    gen7e: req.body.gen7e,
    legendaryBirds: req.body.legendaryBirds,
    legendaryBeasts: req.body.legendaryBeasts,
    legendaryTitans: req.body.legendaryTitans,
    weatherTrio: req.body.weatherTrio,
    creationTrio: req.body.creationTrio,
    taoTrio: req.body.taoTrio,
    auraTrio: req.body.auraTrio,
    lightTrio: req.body.lightTrio,
    gamesList: req.body.gamesList
  };
  Vote.findOneAndUpdate({ fingerprint: fingerprint}, changedVote, {new: true}, (err, updatedVote) => {
    if (err) {
      console.log(err);
    } else {
      Vote.find({}, (err, allVotes) => {
        if (err) {
          console.log(err);
        } else {
          req.flash('success', 'Votes successfully updated!');
          res.redirect('results');
        }
      });
    }
  });
});

app.delete('/survey', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOneAndDelete({ fingerprint: fingerprint }, (err) => {
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'Votes successfully deleted!');
      res.redirect('results');
    }
  });
});

// Results routes
app.get('/results', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOne({ fingerprint: fingerprint }, (err, returnedVote) => {
    if (err) {
      console.log(err);
    } else {
      Vote.find({}, (err, allVotes) => {
        if (err) {
          console.log(err);
        } else {
          let previousVote = returnedVote;
          res.render('results', {votes: allVotes, 
                                  helpers: ejsHelpers, 
                                  fingerprint: fingerprint,
                                  pokemonData: pokemonDataFile, 
                                  previousVote: previousVote,
                                  gamesData: gamesData, 
                                  page: 'results'}
          );
        }
      });
    }
  });
});

// Contact routes
app.get('/contact', (req, res) => {
  res.render('contact', {page: 'contact'});
});

// Non-existent routes
app.get('*', function(req, res) {
  res.send('Sorry, that page does not exist.');
});


app.listen(port, () => console.log(`Poke-Survey listening on port ${port}!`));