import firebase from 'firebase';

export const initialize = config => {
  firebase.initializeApp(config);
};

export const setIn = (path, data) => {
  firebase.database().ref(path).set(data);
};

export const read = (path, cb) => {
  firebase.database().ref(path).once('value')
    .then(snapshot => cb(snapshot.val()));
};

export const push = (path, data, cb) => {
  const uniqueKey = firebase.database().ref(path).push().key;
  setIn(path + '/' + uniqueKey, data)
    .then(() => cb(uniqueKey))
};

export const update = (path, data) => {
  firebase.database().ref(path).update(data);
};

export const remove = path => {
  firebase.database().ref(path).remove();
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

export const loginWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

export const loginWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

export const sendPasswordResetEmail = email => {
  firebase.auth().sendPasswordResetEmail(email);
};

export const createUserWithEmailAndPassword = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = () => {
  firebase.auth().signOut();
};

export const onAuthStateChanged = cb => {
  firebase.auth().onAuthStateChanged(cb);
};