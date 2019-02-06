const express         = require('express');
const router          = express.Router();
const middleware      = require('../middleware/index');
const Vote            = require('../models/vote.js');
const ejsHelpers      = require('../public/scripts/main.js');
const pokemonDataFile = require('../public/scripts/data.js');
const gamesData       = require('../public/scripts/gamesData.js');


// Landing page
router.get('/', (req, res) => {
  res.render('index', {page: 'index'});
});

//Survey routes
router.get('/survey', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOne({ fingerprint: fingerprint }, (err, returnedVote) => {
    if (err) { 
      req.flash('error', 'There was an error loading the data from the previous vote!');    
      console.log(err);
    }
    let previousVote = returnedVote;
    res.render('survey', {pokemonData: pokemonDataFile, 
                          helpers: ejsHelpers,
                          fingerprint: fingerprint, 
                          previousVote: previousVote, 
                          gamesData: gamesData, 
                          page: 'survey'}
    );
  });
});

router.post('/survey', middleware.newVote, middleware.validate, middleware.validatePokemon, middleware.validateGames, (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOne({ fingerprint: fingerprint }, (err, previousVote) => {
    if (err) {
      req.flash('error', 'Sorry, there was an error submitting your vote!');  
      res.redirect('/survey');
      console.log(err);
    }
    if (previousVote === null) {
      Vote.create(res.locals.newVote, (err, newVote) => {
        if (err) {
          req.flash('error', 'Sorry, there was an error submitting your vote!');  
          res.redirect('/survey');
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

router.put('/survey', middleware.newVote, middleware.validate, middleware.validatePokemon, middleware.validateGames, (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOneAndUpdate({ fingerprint: fingerprint}, res.locals.newVote, {new: true}, (err, updatedVote) => {
    if (err) {
      req.flash('error', 'There was an error updating your vote!');
      res.redirect('survey');
      console.log(err);
    } else {
      Vote.find({}, (err, allVotes) => {
        if (err) {
          req.flash('error', 'There was an error finding all votes on the Results page!');   
          res.redirect('survey');
          console.log(err);
        } else {
          req.flash('success', 'Votes successfully updated!');
          res.redirect('results');
        }
      });
    }
  });
});

router.delete('/survey', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOneAndDelete({ fingerprint: fingerprint }, (err) => {
    if (err) {
      req.flash('error', 'There was an error deleting your vote!');
      res.redirect('survey');
      console.log(err);
    } else {
      req.flash('success', 'Votes successfully deleted!');
      res.redirect('results');
    }
  });
});

// Results routes
router.get('/results', (req, res) => {
  let fingerprint = req.fingerprint.hash;
  Vote.findOne({ fingerprint: fingerprint }, (err, returnedVote) => {
    if (err) {
      req.flash('error', 'There was an error loading the data from the previous vote!');
      console.log(err);
    }
    Vote.find({}, (err, allVotes) => {
      if (err) {
        req.flash('error', 'There was an error finding all votes on the Results page!');
        res.redirect('survey');
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
  });
});

// Contact routes
router.get('/contact', (req, res) => {
  res.render('contact', {page: 'contact'});
});

// Non-existent routes
router.get('*', function(req, res) {
  res.send('Sorry, that page does not exist.');
});

module.exports = router;