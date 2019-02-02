const Vote = require('../models/vote');

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
  }
}

module.exports = middleware;