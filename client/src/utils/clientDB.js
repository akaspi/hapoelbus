import * as _ from 'lodash';
import firebase from 'firebase';
import * as clientConfig from '../../../conf/client.config.json';

firebase.initializeApp(clientConfig.firebase);

const setIn = (path, data) => firebase.database().ref(path).set(data);

const read = path => firebase.database().ref(path).once('value')
  .then(snapshot => snapshot.val());

const push = (path, data) => {
  const uniqueKey = firebase.database().ref(path).push().key;
  return setIn(path + '/' + uniqueKey, data);
};

const update = (path, data) => firebase.database().ref(path).update(data);

const remove = path => firebase.database().ref(path).remove();

const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(result => result.user);
};

const loginWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(result => result.user);
};

const loginWithEmailAndPassword = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => _.pick(user, ['uid', 'email']));

const createUserWithEmailAndPassword = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => _.pick(user, ['uid', 'email']));

const signOut = () => firebase.auth().signOut();

const getLoggedInUser = () => new Promise(resolve => {
  const onAuthStateChange = user => {
    firebase.auth().removeAuthTokenListener(onAuthStateChange);
    resolve(user);
  };
  firebase.auth().onAuthStateChanged(onAuthStateChange);
});

module.exports = {
  setIn,
  read,
  push,
  update,
  remove,
  loginWithGoogle,
  loginWithFacebook,
  loginWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getLoggedInUser
};

