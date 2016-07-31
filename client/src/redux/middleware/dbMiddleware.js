import * as _ from 'lodash';
import Constants from '../../utils/constants';
import DatabaseAPI from '../../../../common/DatabaseAPI';
import * as clientConfig from '../../../../conf/client.config.json';

import {
  setCurrentUser,
  updateUserInfo,
  startLoading,
  endLoading,
  reportError
} from '../actions/actionsCreator';

import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  UPDATE_USER_INFO,
  FETCH_CURRENT_USER,
  FETCH_USER_INFO,
  SIGN_OUT
} from '../actions/actionTypes';

const dbAPI = new DatabaseAPI(clientConfig.firebase);

const errorCodeMap = {
  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE
};

const parseDBError = errorCode => (errorCodeMap[errorCode] || Constants.ERRORS.GENERAL);

const loginWithFacebook = (action, next, onSuccess, onError) => {
  const onLoginSuccess = user => {
    next(setCurrentUser(user.uid, user.email));
    onSuccess();
  };

  dbAPI.loginWithFacebook(onLoginSuccess, onError);
};

const loginWithGoogle = (action, next, onSuccess, onError) => {
  const onLoginSuccess = user => {
    next(setCurrentUser(user.uid, user.email));
    onSuccess();
  };

  dbAPI.loginWithGoogle(onLoginSuccess, onError);
};

const signUpWithEmailAndPassword = (action, next, onSuccess, onError) => {
  const onSignUpSuccess = user => {
    next(setCurrentUser(user));
    onSuccess();
  };

  dbAPI.createUserWithEmailAndPassword(action.email, action.password, onSignUpSuccess, onError);
};

const dbUpdateUserInfo = (action, next, onSuccess, onError) => {
  const userInfoPath = 'usersInfo/' + action.uid;
  dbAPI.update(userInfoPath, action.userInfo, onSuccess, onError);
};

const signOut = (next, action, onSuccess, onError) => {
  dbAPI.signOut(onSuccess, onError);
};

const fetchUserInfo = (action, next, onSuccess, onError) => {
  const userInfoPath = 'usersInfo/' + action.uid;
  const onFetchSuccess = userInfo => {
    next(updateUserInfo(action.uid, userInfo));
    onSuccess();
  };

  dbAPI.read(userInfoPath, onFetchSuccess, onError);
};

const fetchCurrentUser = (action, next, onSuccess) => {
  dbAPI.getLoggedInUser(user => {
    onSuccess();
    if (user) {
      next(setCurrentUser(user.uid, user.email));
    }
  });
};

const actionsMap = {
  [LOGIN_WITH_FACEBOOK]: loginWithFacebook,
  [LOGIN_WITH_GOOGLE]: loginWithGoogle,
  [SIGN_UP_WITH_EMAIL_AND_PASSWORD]: signUpWithEmailAndPassword,
  [SIGN_OUT]: signOut,
  [FETCH_CURRENT_USER]: fetchCurrentUser,
  [FETCH_USER_INFO]: fetchUserInfo,
  [UPDATE_USER_INFO]: dbUpdateUserInfo
};

const onActionStart = next => {
  next(startLoading());
  next(reportError(''));
};
const onActionSuccess = next => next(endLoading());
const onActionError = (next, dbError) => {
  next(endLoading());
  next(reportError(parseDBError(dbError.code)));
};

export default store => next => action => { // eslint-disable-line no-unused-vars
  if (_.isFunction(actionsMap[action.type])) {
    onActionStart(next);
    actionsMap[action.type](action, next, onActionSuccess.bind(null, next), onActionError.bind(null, next));
  }

  return next(action);
};