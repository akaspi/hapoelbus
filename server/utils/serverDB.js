const firebase = require('firebase');
const serverConfig = require('../../conf/server.config.json');
const Promise = require('bluebird');

firebase.initializeApp(serverConfig.firebase, 'ServerFirebase');

const read = path => new Promise((resolve, reject) => {
  firebase.database().ref(path).once('value')
    .then(snapshot => resolve(snapshot.val()))
    .catch(reject);
});

const remove = path => new Promise((resolve, reject) => {
  firebase.database().ref(path).remove()
    .then(resolve)
    .catch(reject);
});

module.exports = { read, remove };