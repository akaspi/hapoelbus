import * as clientDB from '../../utils/clientDB';
import { AUTH_ERROR_CODES_MAP } from './authActions';
import * as userActions from './userActions';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

export const initializeApp = () => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.getLoggedInUser()
    .then(user => {
      if (user) {
        dispatch(userActions.setCurrentUser(user.uid, user.email));
        return dispatch(userActions.fetchUserInfo(user.uid));
      }
      return null;
    })
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};