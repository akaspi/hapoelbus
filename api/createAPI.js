import AuthStore from '../mobx/stores/authStore';
import UsersInfoStore from '../mobx/stores/usersInfoStore';
import GamesStore from '../mobx/stores/gamesStore';
import BookingsStore from '../mobx/stores/bookingsStore';
import LoadingStore from '../mobx/stores/loadingStore';
import RoutingStore from '../mobx/stores/routingStore';

import sync from '../api/utils/sync';

import LoadingAPI from '../api/loadingAPI';
import RoutingAPI from '../api/routingAPI';
import AuthDataAPI from '../api/authDataAPI';
import UsersInfoAPI from '../api/usersInfoAPI';
import GamesAPI from '../api/gamesAPI';
import BookingsAPI from '../api/bookingsAPI';
import DistributionAPI from '../api/distributionAPI';

const createStores = () => ({
  routingStore: new RoutingStore(),
  loadingStore: new LoadingStore(),
  authStore: new AuthStore(),
  usersInfoStore: new UsersInfoStore(),
  gamesStore: new GamesStore(),
  bookingsStore: new BookingsStore()
});

export default function createAPI() {
  const stores = createStores();

  sync(stores);

  return {
    loadingAPI: new LoadingAPI(stores),
    routingAPI: new RoutingAPI(stores),
    authDataAPI: new AuthDataAPI(stores),
    usersInfoAPI: new UsersInfoAPI(stores),
    gamesAPI: new GamesAPI(stores),
    bookingsAPI: new BookingsAPI(stores),
    distributionAPI: new DistributionAPI(stores)
  };
}