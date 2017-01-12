import firebase from 'firebase';

export const initialize = config => {
  firebase.initializeApp(config);
};

export const setIn = (path, data) => {
  firebase.database().ref(path).set(data);
};

export const read = path => {
  return firebase.database().ref(path).once('value')
    .then(snapshot => cb(snapshot.val()));
};

export const push = (path, data, cb) => {
  const uniqueKey = firebase.database().ref(path).push().key;
  setIn(path + '/' + uniqueKey, data)
    .then(() => cb(uniqueKey))
};

export const update = (path, data) => {
  return firebase.database().ref(path).update(data);
};

export const remove = path => {
  return firebase.database().ref(path).remove();
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

export const listenToChildAdded = (path, onChildAdded) => {
  firebase.database().ref(path).orderByPriority().startAt(Date.now()).on('child_added', snapshot => onChildAdded(snapshot.val(), snapshot.key));
};

export const listenToChildRemoved = (path, onChildRemoved) => {
  firebase.database().ref(path).orderByPriority().startAt(Date.now()).on('child_removed', snapshot => onChildRemoved(snapshot.val(), snapshot.key));
};

export const listenToChildChanged = (path, onChildChanged) => {
  firebase.database().ref(path).orderByPriority().startAt(Date.now()).on('child_changed', snapshot => onChildChanged(snapshot.val(), snapshot.key));
};