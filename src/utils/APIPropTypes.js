import { PropTypes } from 'react';
import AuthDataAPI from '../../api/authDataAPI';
import UsersInfoAPI from '../../api/usersInfoAPI';
import LoadingAPI from '../../api/loadingAPI';


const APIPropTypes = {
  authDataAPI: PropTypes.instanceOf(AuthDataAPI),
  usersInfoAPI: PropTypes.instanceOf(UsersInfoAPI),
  loadingAPI: PropTypes.instanceOf(LoadingAPI)
};

export default APIPropTypes;
