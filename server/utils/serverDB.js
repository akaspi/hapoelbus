const config = require('../config/config');
const firebase = require('firebase');
const Promise = require('bluebird');

firebase.initializeApp(config.firebase, 'ServerFirebase');

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