const config = require('../../conf/server.config.json');

const exec = () => {
  console.log(config.firebase.serviceAccount.privateKey);
};

module.exports = { exec };