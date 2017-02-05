import get from 'lodash/get';
import { computed } from 'mobx';

import * as dbAuthData from '../database/dbAuthData';

export default class AuthDataAPI {
  constructor(stores) {
    this.stores = stores;
  }

  @computed get isLoggedIn() {
    return !!(get(this.stores.authStore, ['authData']));
  }

  @computed get isAdmin() {
    return !!(get(this.stores.authStore, ['authData', 'isAdmin']));
  }

  loginWithFacebook = dbAuthData.loginWithFacebook;

  loginWithGoogle = dbAuthData.loginWithGoogle;

  loginWithEmailAndPassword = dbAuthData.loginWithEmailAndPassword;

  signUpWithEmailAndPassword = dbAuthData.signUpWithEmailAndPassword;

  sendPasswordResetEmail = dbAuthData.sendPasswordResetEmail;

  logOut = dbAuthData.logOut;
}