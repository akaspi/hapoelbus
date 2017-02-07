import _ from 'lodash';
import { computed } from 'mobx';

import * as dbAuthData from '../database/dbAuthData';

export default class AuthDataAPI {
  constructor(stores) {
    this.stores = stores;
  }

  @computed get authData() {
    return _.get(this.stores.authStore, ['authData'], {});
  }

  @computed get isLoggedIn() {
    return !!(_.get(this.stores.authStore, ['authData']));
  }

  @computed get isAdmin() {
    return !!(_.get(this.stores.authStore, ['authData', 'isAdmin']));
  }

  loginWithFacebook = dbAuthData.loginWithFacebook;

  loginWithGoogle = dbAuthData.loginWithGoogle;

  loginWithEmailAndPassword = dbAuthData.loginWithEmailAndPassword;

  signUpWithEmailAndPassword = dbAuthData.signUpWithEmailAndPassword;

  sendPasswordResetEmail = dbAuthData.sendPasswordResetEmail;

  logOut = dbAuthData.logOut;
}