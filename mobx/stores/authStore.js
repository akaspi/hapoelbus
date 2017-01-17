import * as _ from 'lodash';
import { observable, action, computed } from 'mobx';

class AuthStore {
  @observable authData = null;

  @action setAuthData = authData => {
    this.authData = authData;
  };

  @computed get isLoggedIn() {
    return !!(_.get(this.authData, 'uid'));
  }

  @computed get isAdmin() {
    return !!(_.get(this.authData, 'isAdmin'));
  }

}

const authStore = new AuthStore();

export default authStore;
export { AuthStore };