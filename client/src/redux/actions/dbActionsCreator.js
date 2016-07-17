import config from '../../../../conf/client.config.json';
import dbAPI from '../../../../common/DatabaseAPI';
const realAPI = dbAPI.init(config.firebase);

import { setCurrentUser } from '../actions/actionsCreator';

export const loginWithGoogle = () => {
  return (dispatch) => {
    realAPI.loginWithGoogle()
      .then((result) => {
        debugger;
        dispatch(setCurrentUser(result.user));
      })
  };
};

export const loginWithFacebook = () => {
  return (dispatch) => {
    realAPI.loginWithFacebook()
      .then((result) => {
        debugger;
        dispatch(setCurrentUser(result.user));
      })
  };
};

export const signUpWithPassword = (email, password, userInfo) => {
  return (dispatch) => {
    realAPI.createUserWithEmailAndPassword(email, password)
      .then(result => {
        dispatch(setCurrentUser(result));
      })
  };
};
