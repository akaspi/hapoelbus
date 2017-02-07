import { PropTypes } from 'react';
import AuthDataAPI from '../../api/authDataAPI';
import UsersInfoAPI from '../../api/usersInfoAPI';
import LoadingAPI from '../../api/loadingAPI';
import RoutingAPI from '../../api/routingAPI';


const APIPropTypes = {
  authDataAPI: PropTypes.instanceOf(AuthDataAPI),
  usersInfoAPI: PropTypes.instanceOf(UsersInfoAPI),
  loadingAPI: PropTypes.instanceOf(LoadingAPI),
  routingAPI: PropTypes.instanceOf(RoutingAPI)
};

export default APIPropTypes;
