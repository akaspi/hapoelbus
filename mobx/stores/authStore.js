import { observable, action } from 'mobx';

export default class AuthStore {
  @observable authData = null;

  @action setAuthData = authData => {
    this.authData = authData;
  };
}