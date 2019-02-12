const express = require('express');
const app = express();

// functions for survey and results pages
app.locals.helpers = {
  add: function(votes, gen, pokemon) {
    if (votes === 'undefined') { return 0 }
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i][gen] === pokemon) {
        count += 1;
      }
    }
    return count;
  },
  totalVotes: function(votes) {
    if (votes === 'undefined') { return 0 }
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
      count += 1;
    }
    return count;
  },
  percentageOfVotes: function(add, totalVotes) {
    if (add === 0) { return 0 }
    let percent = ((add / totalVotes) * 100).toFixed(2);
    return percent;
  },
  totalGameVotes: function(votes, gameFormValue) {
    if (votes === 'undefined') { return 0 }
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
      let arrayNum = votes[i]['gamesList'].indexOf(gameFormValue);
      if (arrayNum !== -1) {
        count += 1;
      }
    }
    return count;
  },
  getDateString: function(date) {
    let dateStart = date.slice(4, 10);
    let dateEnd = date.slice(11, 15);
    let fullDate = dateStart + ', ' + dateEnd;
    return fullDate;
  }
};

module.exports = app.locals.helpers;