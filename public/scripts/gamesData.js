const express = require('express');
const app = express();

app.locals.gamesList = [
  {
    gameName: 'Red and Blue',
    formName: 'gamesList[]',
    formValue: 'redBlue'
  },
  {
    gameName: 'Gold and Silver',
    formName: 'gamesList[]',
    formValue: 'goldSilver'
  },
  {
    gameName: 'Ruby and Sapphire',
    formName: 'gamesList[]',
    formValue: 'rubySapphire'
  },
  {
    gameName: 'Diamond and Pearl',
    formName: 'gamesList[]',
    formValue: 'diamondPearl'
  },
  {
    gameName: 'Black and White',
    formName: 'gamesList[]',
    formValue: 'blackWhite'
  },
  {
    gameName: 'Black and White 2',
    formName: 'gamesList[]',
    formValue: 'blackWhite2'
  },
  {
    gameName: 'X and Y',
    formName: 'gamesList[]',
    formValue: 'xY'
  },
  {
    gameName: 'Sun and Moon',
    formName: 'gamesList[]',
    formValue: 'sunMoon'
  }
];

module.exports = app.locals.gamesList;