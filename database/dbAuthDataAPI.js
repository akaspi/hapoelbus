import { onAuthStateChanged, read } from './utils/db';

const ADMINS_PATH = 'admins';

function getAuthData(user, cb) {
  read(ADMINS_PATH + '/' + user.uid, isAdmin => {
    cb({
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      isAdmin: isAdmin || false
    })
  });
}

export function onAuthDataChange(cb) {
  onAuthStateChanged(user => {
    if (!user) {
      cb(null);
    } else {
      getAuthData(user, cb);
    }
  });
}