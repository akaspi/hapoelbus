const firebase = require('firebase');
const serverConfig = require('../../conf/server.config.json');
const Promise = require('bluebird');

if (firebase.apps.length === 0) {
  firebase.initializeApp(serverConfig.firebase);
} else {
  firebase.initializeApp(serverConfig.firebase, 'ServerFirebase');
}

console.log(JSON.stringify(serverConfig.firebase));

const read = path => new Promise((resolve, reject) => {
  firebase.database().ref(path).once('value')
    .then(snapshot => resolve(snapshot.val()))
    .catch(reject);
});

const setIn = (path, data) => new Promise((resolve, reject) => {
  firebase.database().ref(path).set(data)
    .then(resolve)
    .catch(reject);
});

const remove = path => new Promise((resolve, reject) => {
  firebase.database().ref(path).remove()
    .then(resolve)
    .catch(reject);
});

module.exports = { read, setIn, remove };