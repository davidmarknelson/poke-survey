const check = require('validator');

const middleware = {
  newVote: function(req, res, next) {
    res.locals.newVote = {
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
    }
    next();
  },
  validate: function(req, res, next) {
    let voteString = JSON.stringify(res.locals.newVote).replace(/([.,{}:"[\]-])/g, "");
    if (check.isAlphanumeric(voteString)) {
      next();
    } else {
      req.flash('error', 'Sorry, there was an error while submitting your votes!');    
      res.redirect('/results');
    }
  },
  validatePokemon: function(req, res, next) {
    if ((res.locals.newVote.gen1 !== 'bulbasaur' && res.locals.newVote.gen1 !== 'charmander' && res.locals.newVote.gen1 !== 'squirtle') ||
        (res.locals.newVote.gen2 !== 'chikorita' && res.locals.newVote.gen2 !== 'cyndaquil' && res.locals.newVote.gen2 !== 'totodile') ||
        (res.locals.newVote.gen3 !== 'treecko' && res.locals.newVote.gen3 !== 'torchic' && res.locals.newVote.gen3 !== 'mudkip') ||
        (res.locals.newVote.gen4 !== 'turtwig' && res.locals.newVote.gen4 !== 'chimchar' && res.locals.newVote.gen4 !== 'piplup') ||
        (res.locals.newVote.gen5 !== 'snivy' && res.locals.newVote.gen5 !== 'tepig' && res.locals.newVote.gen5 !== 'oshawott') ||
        (res.locals.newVote.gen6 !== 'chespin' && res.locals.newVote.gen6 !== 'fennekin' && res.locals.newVote.gen6 !== 'froakie') ||
        (res.locals.newVote.gen7 !== 'rowlet' && res.locals.newVote.gen7 !== 'litten' && res.locals.newVote.gen7 !== 'popplio') ||
        (res.locals.newVote.gen1e !== 'venusaur' && res.locals.newVote.gen1e !== 'charizard' && res.locals.newVote.gen1e !== 'blastoise') ||
        (res.locals.newVote.gen2e !== 'meganium' && res.locals.newVote.gen2e !== 'typhlosion' && res.locals.newVote.gen2e !== 'feraligatr') ||
        (res.locals.newVote.gen3e !== 'sceptile' && res.locals.newVote.gen3e !== 'blaziken' && res.locals.newVote.gen3e !== 'swampert') ||
        (res.locals.newVote.gen4e !== 'torterra' && res.locals.newVote.gen4e !== 'infernape' && res.locals.newVote.gen4e !== 'empoleon') ||
        (res.locals.newVote.gen5e !== 'serperior' && res.locals.newVote.gen5e !== 'emboar' && res.locals.newVote.gen5e !== 'samurott') ||
        (res.locals.newVote.gen6e !== 'chesnaught' && res.locals.newVote.gen6e !== 'delphox' && res.locals.newVote.gen6e !== 'greninja') ||
        (res.locals.newVote.gen7e !== 'decidueye' && res.locals.newVote.gen7e !== 'incineroar' && res.locals.newVote.gen7e !== 'primarina') ||
        (res.locals.newVote.legendaryBirds !== 'articuno' && res.locals.newVote.legendaryBirds !== 'zapdos' && res.locals.newVote.legendaryBirds !== 'moltres') ||
        (res.locals.newVote.legendaryBeasts !== 'raikou' && res.locals.newVote.legendaryBeasts !== 'entei' && res.locals.newVote.legendaryBeasts !== 'suicune') ||
        (res.locals.newVote.legendaryTitans !== 'regirock' && res.locals.newVote.legendaryTitans !== 'regice' && res.locals.newVote.legendaryTitans !== 'registeel') ||
        (res.locals.newVote.weatherTrio !== 'kyogre' && res.locals.newVote.weatherTrio !== 'groudon' && res.locals.newVote.weatherTrio !== 'rayquaza') ||
        (res.locals.newVote.creationTrio !== 'dialga' && res.locals.newVote.creationTrio !== 'palkia' && res.locals.newVote.creationTrio !== 'giratina') ||
        (res.locals.newVote.taoTrio !== 'reshiram' && res.locals.newVote.taoTrio !== 'kyurem' && res.locals.newVote.taoTrio !== 'zekrom') ||
        (res.locals.newVote.auraTrio !== 'xerneas' && res.locals.newVote.auraTrio !== 'yveltal' && res.locals.newVote.auraTrio !== 'zygarde') ||
        (res.locals.newVote.lightTrio !== 'solgaleo' && res.locals.newVote.lightTrio !== 'lunala' && res.locals.newVote.lightTrio !== 'necrozma')) {
      req.flash('error', 'Sorry, there was an error while submitting your votes!');    
      res.redirect('/results');
    } else {
      next();
    }
  },
  validateGames: function(req, res, next) {
    if (res.locals.newVote.gamesList === undefined) { return next(); }
    for (var i = 0; i < res.locals.newVote.gamesList.length; i++) {
      if (res.locals.newVote.gamesList[i] !== 'redBlue' && 
          res.locals.newVote.gamesList[i] !== 'goldSilver' && 
          res.locals.newVote.gamesList[i] !== 'rubySapphire' && 
          res.locals.newVote.gamesList[i] !== 'diamondPearl' && 
          res.locals.newVote.gamesList[i] !== 'blackWhite' && 
          res.locals.newVote.gamesList[i] !== 'blackWhite2' && 
          res.locals.newVote.gamesList[i] !== 'xY' && 
          res.locals.newVote.gamesList[i] !== 'sunMoon') {
        req.flash('error', 'Sorry, there was an error while submitting one of your game votes! ');  
        res.locals.newVote.gamesList[i] = '';
      }
    }
    next();
  }
}

module.exports = middleware;