const firebase = require('firebase');
const serverConfig = require('../../conf/server.config.json');
const Promise = require('bluebird');

const fbConfig= {
  serviceAccount: {
    projectId: process.env.fb_projectId,
    clientEmail: process.env.fb_clientEmail,
    privateKey: process.env.fb_privateKey
  },
  databaseURL: process.env.fb_databaseURL
};

console.log('escaped: ' + process.env.fb_privateKey);
console.log('\n\n');
console.log('unescaped: ' + unescape(process.env.fb_privateKey));

if (firebase.apps.length === 0) {
  firebase.initializeApp(fbConfig);
} else {
  firebase.initializeApp(fbConfig, 'ServerFirebase');
}

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