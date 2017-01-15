import { onAuthStateChanged, read } from './utils/db';

const ADMINS_PATH = 'admins';

export function onAuthDataChange(cb) {
  onAuthStateChanged(user => {
    if (!user) {
      cb(null);
    } else {
      cb({
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL
      });
    }
  });
}

export function isAdmin(uid) {
  return read(`${ADMINS_PATH}/${uid}`).then(isAdmin => !!isAdmin);
}