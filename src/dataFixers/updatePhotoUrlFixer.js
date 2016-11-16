import { updateUser } from '../redux/actions/userActions';

export default function(dispatch, state) {
  const uid = state.authData.uid;
  const users = state.users;

  if (users[uid]) {
    return dispatch(updateUser(uid, { photoURL: state.authData.photoURL }));
  }
}