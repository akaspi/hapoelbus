const _ = require('lodash');
const firebase = require('firebase');

class DatabaseAPI {
  constructor(config) {
    this.firebaseApp = firebase.initializeApp(config);
  }

  setIn(path, data, onSuccess, onError) {
    this.firebaseApp.database().ref(path).set(data, error => {
      if (error) {
        return onError(error);
      }
      return onSuccess();
    });
  }

  read(path, onSuccess, onError) {
    const onReadSuccess = (snapshot) => onSuccess(snapshot.val());
    const onReadError = (error) => onError(error);
    this.firebaseApp.database().ref(path).once('value', onReadSuccess, onReadError);
  }

  push(path, data, onSuccess, onError) {
    const uniqueKey = this.firebaseApp.database().ref(path).push().key;
    this.setIn(path + '/' + uniqueKey, data, onSuccess, onError);
  }

  update(path, data, onSuccess, onError) {
    this.firebaseApp.database().ref(path).update(data, error => {
      if (error) {
        return onError(error);
      }
      return onSuccess();
    });
  }

  remove(path, onSuccess, onError) {
    this.firebaseApp.database().ref(path).remove(error => {
      if (error) {
        return onError(error);
      }
      return onSuccess();
    });
  }

  loginWithGoogle(onSuccess, onError) {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.firebaseApp.auth().signInWithPopup(provider)
      .then(result => onSuccess(result.user))
      .catch(error => onError(error));
  }

  loginWithFacebook(onSuccess, onError) {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.firebaseApp.auth().signInWithPopup(provider)
      .then(result => onSuccess(result.user))
      .catch(error => onError(error));
  }

  createUserWithEmailAndPassword(email, password, onSuccess, onError) {
    this.firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(user => onSuccess(_.pick(user, ['uid', 'email'])))
      .catch(error => onError(error));
  }

  signOut(onSuccess, onError) {
    this.firebaseApp.auth().signOut()
      .then(() => onSuccess())
      .catch(error => onError(error));
  }

  getLoggedInUser(onComplete) {
    const onAuthStateChange = user => {
      firebase.auth().removeAuthTokenListener(onAuthStateChange);
      onComplete(user);
    };
    firebase.auth().onAuthStateChanged(onAuthStateChange);
  }

}

module.exports = DatabaseAPI;