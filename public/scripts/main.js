const express = require('express');
const app = express();

// functions for survey and results pages
app.locals.helpers = {
  add: function(votes, gen, pokemon) {
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i][gen] === pokemon) {
        count += 1;
      }
    }
    return count;
  },
  totalVotes: function(votes) {
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
      count += 1;
    }
    return count;
  },
  percentageOfVotes: function(add, totalVotes) {
    let percent = ((add / totalVotes) * 100).toFixed(2);
    return percent;
  },
  totalGameVotes: function(votes, gameFormValue) {
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