import * as db from './utils/db';

export function onAuthDataChange(cb) {
  db.onAuthStateChanged(user => {
    if (!user) {
      cb(null);
    } else {
      isAdmin(user.uid).then(isAdmin => {
        cb({
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          isAdmin
        });
      });
    }
  });
}

export function isAdmin(uid) {
  return db.read(`admins/${uid}`).then(isAdmin => !!isAdmin);
}

export function loginWithGoogle() {
  return db.loginWithGoogle();
}

export function loginWithFacebook() {
  return db.loginWithFacebook();
}

export function loginWithEmailAndPassword(email, password) {
  return db.loginWithEmailAndPassword(email, password);
}

export function signUpWithEmailAndPassword(email, password) {
  return db.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return db.sendPasswordResetEmail(email);
}

export function logOut() {
  return db.signOut();
}