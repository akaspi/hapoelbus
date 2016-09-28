const _  = require('lodash');

const defaults = {
  firebase: {
    apiKey: "AIzaSyDEISV2aMiePkueCwlDR8CVg7h_BLa3Joc",
    authDomain: "hapoelbus-b25d4.firebaseapp.com",
    databaseURL: "https://hapoelbus-b25d4.firebaseio.com",
    storageBucket: "hapoelbus-b25d4.appspot.com"
  }
};

let config = {};

try {
  config = require('./config.json');
} catch (e) {
  console.log('config.json missing or bad.');
}

module.exports = _.defaults(config, defaults);