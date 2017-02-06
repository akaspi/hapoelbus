import AuthStore from '../mobx/stores/authStore';
import UsersInfoStore from '../mobx/stores/usersInfoStore';
import GamesStore from '../mobx/stores/gamesStore';
import BookingsStore from '../mobx/stores/bookingsStore';
import LoadingStore from '../mobx/stores/loadingStore';

import sync from '../api/utils/sync';

import LoadingAPI from '../api/loadingAPI';
import AuthDataAPI from '../api/authDataAPI';
import UsersInfoAPI from '../api/usersInfoAPI';
import GamesAPI from '../api/gamesAPI';
import BookingsAPI from '../api/bookingsAPI';
import DistributionAPI from '../api/distributionAPI';

const createStores = () => ({
  loadingStore: new LoadingStore(),
  authStore: new AuthStore(),
  usersInfoStore: new UsersInfoStore(),
  gamesStore: new GamesStore(),
  bookingsStore: new BookingsStore()
});

export default class API {
  constructor() {
    const stores = createStores();

    sync(stores);

    this.loadingAPI = new LoadingAPI(stores);
    this.authDataAPI = new AuthDataAPI(stores);
    this.usersInfoAPI = new UsersInfoAPI(stores);
    this.gamesAPI = new GamesAPI(stores);
    this.bookingsAPI = new BookingsAPI(stores);
    this.distributionAPI = new DistributionAPI(stores);
  }
}
