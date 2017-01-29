import authStore from '../mobx/stores/authStore';
import usersInfoStore from '../mobx/stores/usersInfoStore';
import * as dbUsersInfo from '../database/dbUsersInfo';

function onUserInfoChange(changeEvent) {
  switch (changeEvent.type) {
    case 'added':
    case 'changed':
      usersInfoStore.updateUserInfo(changeEvent.uid, changeEvent.userInfo);
      break;
    case 'removed':
      usersInfoStore.removeUserInfo(changeEvent.uid);
      break;
  }
}

export function trackUsersInfo() {
  if (!authStore.authData) {
    return;
  }

  const fetchPromise = authStore.authData.isAdmin ? dbUsersInfo.fetchUsersInfo() : dbUsersInfo.fetchUsersInfo(authStore.authData.uid);

  fetchPromise.then((usersInfo) => {
    usersInfoStore.setUsersInfo(usersInfo);
    dbUsersInfo.trackUsersInfo(uid, onUserInfoChange);
  });
}

export function update(uid, userInfo) {
  return dbUsersInfo.updateUserInfo(uid, userInfo);
}

window.usersInfoStore = usersInfoStore;
