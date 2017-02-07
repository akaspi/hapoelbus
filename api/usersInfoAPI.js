import _ from 'lodash';
import { computed } from 'mobx';

import * as dbUsersInfo from '../database/dbUsersInfo';

export default class UsersInfoAPI {
  constructor(stores) {
    this.stores = stores;
  }

  @computed get usersInfo() {
    return this.stores.usersInfoStore.usersInfo.toJS();
  }

  @computed get currentUserInfo() {
    const uid = _.get(this.stores.authStore, ['authData', 'uid']);
    if (this.stores.usersInfoStore.usersInfo.has(uid)) {
      return this.stores.usersInfoStore.usersInfo.get(uid);
    }
    return {};
  }

  @computed.struct get sortedUsersInfo() {
    return _(this.usersInfo)
      .map((userInfo, uid) => ({ uid, userInfo }))
      .sortBy('userInfo.firstName')
      .value();
  }

  updateUserInfo = dbUsersInfo.updateUserInfo;

  removeUserInfo = dbUsersInfo.removeUserInfo;
}