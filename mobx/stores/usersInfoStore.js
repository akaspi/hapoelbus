import mapValues from 'lodash/mapValues';
import { observable, extendObservable, action } from 'mobx';

class UserInfo {
  constructor(userInfo) {
    extendObservable(this, {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      photoURL: userInfo.photoURL,
      phonePrefix: userInfo.phonePrefix,
      phoneNumber: userInfo.phoneNumber,
      requestForMembership: userInfo.requestForMembership,
      station: userInfo.station,
      subscribeSMS: userInfo.subscribeSMS,
      subscribeMail: userInfo.subscribeMail,
      seasonTickets: userInfo.seasonTickets || 0
    });
  }

  @action update = partialUserInfo => {
    extendObservable(this, partialUserInfo);
  }
}

class UsersInfoStore {
  @observable usersInfo = observable.map({});

  @action setUsersInfo = usersInfo => {
    this.usersInfo.replace(mapValues(usersInfo, userInfo => new UserInfo(userInfo)));
  };

  @action addUserInfo = (uid, userInfo) => {
    this.usersInfo.set(uid, new UserInfo(userInfo));
  };

  @action updateUserInfo = (uid, partialUserInfo) => {
    const userInfo = this.usersInfo.get(uid);
    userInfo.update(partialUserInfo);
  };

  @action removeUserInfo = uid => {
    this.usersInfo.delete(uid);
  }

}

const usersInfoStore = new UsersInfoStore();

export default usersInfoStore;
export { UsersInfoStore };