const Promise = require('bluebird');
const config = require('../../conf/server.config.json');

const exec = () => {
  return Promise.resolve()
    .then(() => {
      console.log(config.firebase.serviceAccount.privateKey);
    });
};

module.exports = { exec };