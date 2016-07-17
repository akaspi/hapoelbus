const firebase = require('firebase');
const createAPI = (config) => {
  const firebaseApp = firebase.initializeApp(config);
  const database = firebaseApp.database();

  return {
    setIn(path, data) {
      return database.ref(path).set(data);
    },
    read(path) {
      return database.ref(path).once('value').then(snapshot => snapshot.val());
    },
    push(path, data) {
      const uniqueKey = database.ref(path).push().key;
      return this.setIn(path + '/' + uniqueKey, data);
    },
    update(path, data) {
      return database.ref().update({ [path]: data });
    },
    remove(path) {
      return database.ref(path).remove();
    },
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return firebaseApp.auth().signInWithPopup(provider);
    }
  };
};

module.exports = {
  init: createAPI
};