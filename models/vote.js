const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  fingerprint: String,
  date: String,
  gen1: String,
  gen2: String,
  gen3: String,
  gen4: String,
  gen5: String,
  gen6: String,
  gen7: String,
  gen1e: String,
  gen2e: String,
  gen3e: String,
  gen4e: String,
  gen5e: String,
  gen6e: String,
  gen7e: String,
  legendaryBirds: String,
  legendaryBeasts: String,
  legendaryTitans: String,
  weatherTrio: String,
  creationTrio: String,
  taoTrio: String,
  auraTrio: String,
  lightTrio: String,
  gamesList: Array,
});

module.exports = mongoose.model('Vote', voteSchema);